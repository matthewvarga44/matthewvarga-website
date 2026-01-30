import { Router, Request, Response } from "express";

const router = Router();

// Flodesk API configuration
const FLODESK_API_KEY = process.env.FLODESK_API_KEY || "fd_key_d3f394f36ead41478dc335bb9057aa43.BMoQyTeqB6S1cEwZZnhmMz6vpLajgiTi2M3XW3juIUnLV9ZdrmRth7g0IbuVWX9riJsgOSVXnFljGVtWBtGdos8SS8l8rvAhAeIJkWrd2PJshtajkOTroRE4WJ1PRQvpr2ExdyOkNz76D226ZTXIGUAVK36dohrHuFcRByZ3EmIhstFVi1nnjZiFEGtE8M5Q";
const FLODESK_AUDIENCE_ID = process.env.FLODESK_AUDIENCE_ID || "697cb771ebd66145dc6f64ca";

interface SubscribeRequest {
  email: string;
  resourceTitle?: string;
}

router.post("/subscribe", async (req: Request<{}, {}, SubscribeRequest>, res: Response) => {
  try {
    const { email, resourceTitle } = req.body;
    console.log("[Subscribe] Received request for email:", email);

    // Validate email
    if (!email || !email.includes("@")) {
      console.log("[Subscribe] Invalid email:", email);
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Call Flodesk API to add subscriber
    console.log("[Subscribe] Calling Flodesk API...");
    const flodeskResponse = await fetch(
      "https://api.flodesk.com/v1/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${FLODESK_API_KEY}`,
        },
        body: JSON.stringify({
          email: email,
          segments: [FLODESK_AUDIENCE_ID],
          fields: {
            downloaded_resource: resourceTitle || "Unknown Resource",
            signup_source: "website_resource_download",
          },
        }),
      }
    );

    console.log("[Subscribe] Flodesk response status:", flodeskResponse.status);

    if (!flodeskResponse.ok) {
      const errorData = await flodeskResponse.json().catch(() => ({}));
      console.error("[Subscribe] Flodesk API error:", errorData);
      
      // If subscriber already exists, that's fine - just return success
      if (flodeskResponse.status === 409 || flodeskResponse.status === 422) {
        console.log("[Subscribe] Subscriber already exists, returning success");
        return res.status(200).json({ 
          success: true, 
          message: "Subscriber already exists or added successfully" 
        });
      }
      
      throw new Error(`Flodesk API error: ${flodeskResponse.statusText}`);
    }

    console.log("[Subscribe] Successfully added subscriber:", email);
    return res.status(200).json({ 
      success: true, 
      message: "Successfully subscribed to Flodesk" 
    });
  } catch (error) {
    console.error("[Subscribe] Error:", error);
    return res.status(500).json({ 
      error: "Failed to subscribe. Please try again later." 
    });
  }
});

export default router;
