import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center space-y-6">
            <h1 className="text-4xl font-serif font-bold text-primary">404</h1>
            <h2 className="text-2xl font-medium">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/">
                <Button>Return Home</Button>
            </Link>
        </div>
    );
}
