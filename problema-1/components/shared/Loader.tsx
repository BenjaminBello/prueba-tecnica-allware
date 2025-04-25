interface LoaderProps {
    size?: "small" | "medium" | "large"
    color?: string
}

export default function Loader({ size = "medium", color = "border-emerald-500" }: LoaderProps) {
    const sizeClasses = {
        small: "w-4 h-4 border-2",
        medium: "w-8 h-8 border-3",
        large: "w-12 h-12 border-4",
    }

    return (
        <div className="flex items-center justify-center">
            <div
                className={`${sizeClasses[size]} ${color} rounded-full border-t-transparent animate-spin`}
                role="status"
                aria-label="Cargando"
            >
                <span className="sr-only">Cargando...</span>
            </div>
        </div>
    )
}
