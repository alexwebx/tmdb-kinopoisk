import Skeleton from "@mui/material/Skeleton";

export const MoviesSkeleton = () => {
    const skeletons = Array.from({ length: 24 });

    return (
        <section
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "20px",
            }}
        >
            {skeletons.map((_, i) => (
                <div
                    key={i}
                    style={{
                        width: 180,
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        margin: "0 auto",
                    }}
                >
                    <div
                        style={{
                            width: 180,
                            height: 270,
                            position: "relative",
                            borderRadius: 20,
                            overflow: "hidden",
                        }}
                    >
                        {/* Кнопка избранного */}
                        <Skeleton
                            variant="circular"
                            width={40}
                            height={40}
                            style={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                zIndex: 1,
                            }}
                        />

                        {/* Постер */}
                        <Skeleton
                            variant="rectangular"
                            width={180}
                            height={270}
                        />
                    </div>

                    {/* Название */}
                    <Skeleton variant="text" width={160} height={24} />
                </div>
            ))}
        </section>
    );
};
