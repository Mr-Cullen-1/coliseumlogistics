import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Container className="flex flex-col items-center gap-6 py-24 text-center sm:py-32">
          <Eyebrow>404</Eyebrow>
          <h1 className="text-h2 font-semibold text-foreground">Page Not Found</h1>
          <p className="max-w-md text-body-lg text-text-secondary">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
          </p>
          <Button href="/">Back to Home</Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
