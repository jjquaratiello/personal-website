const ShootingStars: React.FC = () => {
    // Define the possible star colors
    const starColors = ["#ffffff", "#ffd700", "#ff69b4", "#00ffff", "#add8e6"]; // White, gold, pink, cyan, light blue

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Shooting Stars */}
            {Array.from({ length: 100 }, (_, i) => {
                const randomColor =
                    starColors[Math.floor(Math.random() * starColors.length)]; // Randomly pick a color

                return (
                    <div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full shadow-lg animate-shooting`}
                        style={{
                            backgroundColor: randomColor, // Assign the random color
                            top: `${Math.random() * -50}vh`, // Start above the viewport
                            left: `${100 + Math.random() * 50}vw`, // Start to the right of the viewport
                            animationDelay: `${i * 0.5}s`, // Staggered animation
                            animationDuration: `${Math.random() * 7 + 8}s`, // Randomize duration
                        }}
                    />
                );
            })}
        </div>
    );
};

export default ShootingStars;
