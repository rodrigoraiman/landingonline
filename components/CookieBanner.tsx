"use client";
import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      buttonText="Accepter"
      declineButtonText="Refuser"
      enableDeclineButton
      style={{ background: "#222", fontSize: "1rem" }}
      buttonStyle={{ color: "#fff", background: "#16a34a", fontWeight: "bold", borderRadius: "0.5rem", padding: "0.5rem 2rem" }}
      declineButtonStyle={{ color: "#fff", background: "#dc2626", fontWeight: "bold", borderRadius: "0.5rem", padding: "0.5rem 2rem", marginLeft: "1rem" }}
      expires={365}
      overlay
    >
      Ce site utilise des cookies pour améliorer votre expérience.{' '}
      <a href="/mentions-legales" style={{ textDecoration: "underline", color: "#fff" }}>En savoir plus</a>
    </CookieConsent>
  );
}
