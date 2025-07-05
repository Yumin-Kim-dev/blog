export default function Footer() {
    return (
        <footer className="border-t border-border py-6 bg-secondary/20">
            <div className="container flex flex-col md:flex-row justify-between items-center mx-auto">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm text-muted-foreground">© 2025 Yumin Kim. All rights reserved.</p>
                </div>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/yuminkimdev/"
                       className="text-sm text-muted-foreground hover:text-primary">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}