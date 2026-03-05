import React, { useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  text: string;
  image: string;
}

const PRIMARY_BLUE = "#3D414D"; 

const testimonials: Testimonial[] = [
  {
    name: "Brettlynn Wolff",
    text: "Camilo Ortega is a knowledgable professional in his field. He is communicative and remains vigilant with his cases. I highly recommend him.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Mark Thompson",
    text: "Camilo handled my divorce and did a great job. Everything went smoothly and he was always available.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Mara Fanti",
    text: "Amazing and professional lawyer helping me obtain my green card. Highly recommended.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Roger Llaurado",
    text: "I'm thankful for Ortega Law and all they did for me. I got the outcome I wanted.",
    image: "https://i.pravatar.cc/100?img=4",
  },
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrame: number;

    const scroll = () => {
      if (!isPaused && !isDragging) {
        container.scrollLeft += 0.7;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, isDragging]);

  const scrollByAmount = (amount: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  let startX = 0;
  let scrollLeftStart = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    setIsDragging(true);
    startX = e.pageX - container.offsetLeft;
    scrollLeftStart = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeftStart - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>What Our Clients are Saying</h2>

      <div style={styles.wrapper}>
        <button
          style={styles.arrowLeft}
          onClick={() => scrollByAmount(-500)}
        >
          ‹
        </button>

        <div
          ref={containerRef}
          style={styles.container}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setIsDragging(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {testimonials.concat(testimonials).map((item, index) => (
            <div key={index} style={styles.card}>
              <p style={styles.text}>{item.text}</p>

              <div style={styles.userRow}>
                <p style={styles.name}>{item.name}</p>
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.avatar}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          style={styles.arrowRight}
          onClick={() => scrollByAmount(500)}
        >
          ›
        </button>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    width: "100%",
    padding: "30px 0",
    backgroundColor: PRIMARY_BLUE,
    color: "#fff",
    borderRadius: "50px",
  },

  title: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "70px",
    fontWeight: 600,
    color: "#C79855",
  },

  wrapper: {
    position: "relative",
    width: "100%",
  },

  container: {
    display: "flex",
    gap: "40px",
    overflow: "hidden",
    padding: "20px 120px",
    cursor: "grab",
  },

  card: {
    minWidth: "500px",
    maxWidth: "500px",
    backgroundColor: "#3D414D",
    color: "#FFFFFF",
    padding: "50px",
    borderRadius: "32px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    flexShrink: 0,
  },

  text: {
    fontSize: "18px",
    lineHeight: 1.8,
    marginBottom: "40px",
  },

  userRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: "18px",
    fontWeight: 600,
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  arrowLeft: {
    position: "absolute",
    left: "40px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "48px",
    background: "transparent",
    border: "none",
    color: "#FFFFFF",
    cursor: "pointer",
    zIndex: 2,
  },

  arrowRight: {
    position: "absolute",
    right: "40px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "48px",
    background: "transparent",
    border: "none",
    color: "#ffffff",
    cursor: "pointer",
    zIndex: 2,
  },
};

export default Testimonials;