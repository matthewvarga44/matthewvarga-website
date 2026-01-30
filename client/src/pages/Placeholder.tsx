import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Placeholder({ title }: { title: string }) {
  return (
    <Layout>
      <div className="container py-20 md:py-32 text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl mb-6">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          This page is currently under construction. We're working hard to bring you valuable content soon.
        </p>
        <Link href="/">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full">
            Return Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
