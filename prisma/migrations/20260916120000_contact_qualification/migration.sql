CREATE TYPE "ContactStatus" AS ENUM ('nouveau', 'contacte', 'visite_prevue', 'devis_envoye', 'accepte', 'perdu');
CREATE TYPE "ContactPreference" AS ENUM ('email', 'telephone');
CREATE TYPE "ContactService" AS ENUM ('taille_de_haies', 'debroussaillage', 'tonte', 'remise_en_etat', 'entretien_regulier', 'autre');
ALTER TABLE "Contact"
  ADD COLUMN "service" "ContactService",
  ADD COLUMN "commune" TEXT,
  ADD COLUMN "contactPreference" "ContactPreference",
  ADD COLUMN "status" "ContactStatus" NOT NULL DEFAULT 'nouveau',
  ADD COLUMN "internalNote" TEXT,
  ADD COLUMN "nextFollowUpAt" TIMESTAMP(3);
CREATE INDEX "Contact_status_nextFollowUpAt_idx" ON "Contact"("status", "nextFollowUpAt");
