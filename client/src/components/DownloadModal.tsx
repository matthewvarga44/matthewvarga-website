import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, CheckCircle } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceTitle: string;
  downloadUrl: string;
  onSuccess?: () => void;
}

export default function DownloadModal({
  isOpen,
  onClose,
  resourceTitle,
  downloadUrl,
  onSuccess,
}: DownloadModalProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        setLoading(false);
        return;
      }

      // Add to Flodesk audience
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          resourceTitle: resourceTitle,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      // Show success message
      setSuccess(true);

      // Trigger download
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = resourceTitle;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Close modal after download
        setTimeout(() => {
          setSuccess(false);
          setEmail("");
          onClose();
          onSuccess?.();
        }, 1000);
      }, 500);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {!success ? "Get Your Free Resource" : "Download Resource"}
          </DialogTitle>
        </DialogHeader>
        {!success ? (
          <>

            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-sm font-semibold text-primary mb-1">
                  You're downloading:
                </p>
                <p className="text-foreground font-medium">{resourceTitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    disabled={loading}
                    className="w-full"
                    required
                  />
                  {error && (
                    <p className="text-sm text-destructive mt-2">{error}</p>
                  )}
                </div>

                <p className="text-xs text-foreground/60">
                  We'll add you to our email list so you can get more free resources, tips, and updates about the The Ordinary Millionaire Community program. We respect your privacy.
                </p>

                <Button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold h-12 rounded-full"
                >
                  {loading ? "Processing..." : "Download Now"}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  disabled={loading}
                  className="w-full rounded-full"
                >
                  Cancel
                </Button>
              </form>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">
              Success!
            </h3>
            <p className="text-foreground/80 mb-4">
              Your download is starting. Check your email for updates and exclusive content.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
