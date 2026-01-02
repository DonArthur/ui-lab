const page = () => {
    const colors = [
        { name: "Background", class: "bg-bg" },
        { name: "Surface", class: "bg-surface" },
        { name: "Border", class: "bg-border" },
        { name: "Text", class: "bg-text" },
        { name: "Muted", class: "bg-muted" },
        { name: "Accent", class: "bg-accent" },
        { name: "Accent Hover", class: "bg-accent-hover" },
        { name: "Accent Soft", class: "bg-accent-soft" },
    ];
    return (
        <div className="min-h-screen bg-bg text-text p-10">
            <h1 className="text-3xl font-semibold mb-8">Color Palette</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {colors.map((color) => (
                    <div key={color.name} className="space-y-2">
                        <div
                            className={`h-24 rounded-xl border border-${color.class.replace('bg-', '')} ${color.class}`}
                        />
                        <p className="text-sm">{color.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page