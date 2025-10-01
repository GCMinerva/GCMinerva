"use client"

import { useEffect, useRef, useState } from "react"

export default function DesertNight() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Star configuration - fixed positions at top
    const stars: Array<{
      x: number
      y: number
      size: number
      baseOpacity: number
      twinkleSpeed: number
      twinklePhase: number
    }> = []

    // Create stars
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * 500,
        size: Math.random() * 2 + 0.5,
        baseOpacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      })
    }

    // Shooting stars
    let shootingStars: Array<{
      x: number
      y: number
      length: number
      speed: number
      angle: number
      opacity: number
    }> = []

    const createShootingStar = () => {
      if (Math.random() < 0.005 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * 300,
          length: Math.random() * 60 + 30,
          speed: Math.random() * 4 + 3,
          angle: Math.random() * 0.3 + 0.3,
          opacity: 1,
        })
      }
    }

    let animationFrameId: number

    const animate = () => {
      // Calculate scroll progress (0 = top, 1 = bottom)
      const maxScroll = canvas.height - window.innerHeight
      const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1)

      // Create main gradient that transitions from sky → desert sand → dark orange
      const mainGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)

      // Sky section at top (0% - 20%)
      mainGradient.addColorStop(0, "#0a0e27") // Deep night blue
      mainGradient.addColorStop(0.05, "#1a1c3d") // Dark blue
      mainGradient.addColorStop(0.15, "#2d2438") // Purple-blue

      // Transition to desert (20% - 30%)
      mainGradient.addColorStop(0.20, "#3d2f24") // Dark brown transition
      mainGradient.addColorStop(0.25, "#8b6f47") // Brown sand

      // Desert sand section (30% - 40%)
      mainGradient.addColorStop(0.30, "#c4915f") // Light sand
      mainGradient.addColorStop(0.35, "#d4a574") // Lighter sand
      mainGradient.addColorStop(0.40, "#c4915f") // Medium sand

      // Underground transition (40% - 100%)
      mainGradient.addColorStop(0.45, "#8b6f47") // Darker sand
      mainGradient.addColorStop(0.55, "#6b5838") // Underground brown
      mainGradient.addColorStop(0.65, "#4a3f2a") // Deeper brown
      mainGradient.addColorStop(0.75, "#3d2f1f") // Dark brown
      mainGradient.addColorStop(0.85, "#2f1f10") // Very dark brown
      mainGradient.addColorStop(0.90, "#1f0f08") // Almost black brown

      // Dark orange at bottom (90% - 100%)
      mainGradient.addColorStop(0.93, "#8B4513") // Saddle brown
      mainGradient.addColorStop(0.96, "#A0522D") // Sienna
      mainGradient.addColorStop(1, "#D2691E") // Chocolate dark orange

      // Fill entire canvas with gradient
      ctx.fillStyle = mainGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars at the top (fade out as you scroll)
      const starOpacity = Math.max(0, 1 - scrollProgress * 4)
      if (starOpacity > 0) {
        stars.forEach((star) => {
          star.twinklePhase += star.twinkleSpeed
          const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7
          const opacity = star.baseOpacity * twinkle * starOpacity

          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
          ctx.fill()

          // Glow for larger stars
          if (star.size > 1.5) {
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.15})`
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
            ctx.fill()
          }
        })

        // Shooting stars
        createShootingStar()
        shootingStars = shootingStars.filter((star) => {
          star.x += Math.cos(star.angle) * star.speed
          star.y += Math.sin(star.angle) * star.speed
          star.opacity -= 0.015

          if (star.opacity <= 0) return false

          const gradient = ctx.createLinearGradient(
            star.x,
            star.y,
            star.x - Math.cos(star.angle) * star.length,
            star.y - Math.sin(star.angle) * star.length
          )
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * starOpacity})`)
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

          ctx.strokeStyle = gradient
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(star.x, star.y)
          ctx.lineTo(
            star.x - Math.cos(star.angle) * star.length,
            star.y - Math.sin(star.angle) * star.length
          )
          ctx.stroke()

          return true
        })
      }

      // Draw desert dunes at the visible sand area
      const duneY = canvas.height * 0.30 // At 30% where sand is visible
      const duneVisibility = 1 - Math.abs(scrollProgress - 0.30) * 3

      if (duneVisibility > 0) {
        ctx.save()
        ctx.globalAlpha = Math.max(0, duneVisibility)

        // First dune layer (lighter)
        ctx.fillStyle = "#d4a574"
        ctx.beginPath()
        ctx.moveTo(0, duneY)
        for (let x = 0; x <= canvas.width; x += 20) {
          const wave1 = Math.sin(x * 0.005) * 60
          const wave2 = Math.cos(x * 0.008 + 1) * 40
          const y = duneY + wave1 + wave2 - 50
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.lineTo(canvas.width, duneY + 200)
        ctx.lineTo(0, duneY + 200)
        ctx.closePath()
        ctx.fill()

        // Second dune layer (darker)
        ctx.fillStyle = "#c4915f"
        ctx.beginPath()
        ctx.moveTo(0, duneY + 80)
        for (let x = 0; x <= canvas.width; x += 20) {
          const wave1 = Math.sin(x * 0.007 + 2) * 50
          const wave2 = Math.cos(x * 0.01) * 30
          const y = duneY + 80 + wave1 + wave2
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.lineTo(canvas.width, duneY + 300)
        ctx.lineTo(0, duneY + 300)
        ctx.closePath()
        ctx.fill()

        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [scrollY])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}
