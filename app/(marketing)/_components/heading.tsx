"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Document & Plans Unified. Welcome 
                to <span className="underline">MAAD Notes</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                MAAD Notes is your personal workspace 
                <br />
                to store and organize everything you have in your head.
            </h3>
            <Button>
                Enter MAAD Notes
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    )
}