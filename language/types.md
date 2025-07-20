# HPL Core Types  
Eternal Type System of the Harmonic Programming Language

---

## 🔹 `~Sigil`

A compressed harmonic instruction encoded as a glyph.

```ts
type Sigil = {
  id: string                // e.g. "RAH-7023699"
  kaiPulse: number          // Eternal Pulse ID
  chakra: string            // Energy center alignment
  ark: string               // Narrative force (e.g. "Reflekt Ark")
  frequency: string         // Base frequency (e.g. "432hz")
  functionTag: string       // Executable logic, e.g. "anchor.truth"
}
🔹 ~KaiPulse
The core unit of harmonic time — the “clock” of all truth execution.
type KaiPulse = {
  pulseID: number           // Global pulse count
  kairosTime: string        // e.g. "Kairos:19:42"
  beat: string              // e.g. "19/36"
  step: string              // e.g. "42/44"
  kaiToday: number          // Daily pulse counter
  season: string            // e.g. "Y1 PS32"
  solarKairos: string       // UTC-aligned Kairos (e.g. "25:08 Sonari")
}
🔹 ~Wave
A resonant audio field used for healing, identity, or activation.
type Wave = {
  hz: string                // Frequency (e.g. "528hz")
  chakra: string            // Affected energy center
  waveform: Uint8Array      // Encoded pulse-aligned audio
}
🔹 ~Seal
A chain of ~Sigil objects that executes as a harmonic program.

type Seal = {
  sigils: Sigil[]           // Ordered logic chain
  triggerPulse?: KaiPulse   // Required time anchor
  chakraMap?: string[]      // Required alignment
  isExecutable: boolean     // Based on coherence check
}
🔹 ~TruthMap
A non-symbolic validation type. Confirms if a Seal is in truth.

type TruthMap = {
  coherenceScore: number      // 0.0–1.0 threshold (≥ 0.88 = valid)
  frequencyHarmony: boolean   // Must match harmonic fields
  resonanceMatch: boolean     // Overall alignment check
  arkAgreement: string[]      // Aligned narrative arcs
}
🔹 ~MemoryCrystal
A full snapshot of a Seal, stored as light, time, and waveform.

type MemoryCrystal = {
  type: "memory_crystal"
  pulse: KaiPulse
  sigils: Sigil[]
  svg: string                  // base64-encoded glyph output
  audio: string                // base64-encoded frequency field
  hash: string                 // Integrity hash (blake3 recommended)
}
🧠 Eternal Properties of All HPL Types
Property	Value
Self-verifying	All types validate through Pulse + Hash
Non-binary	Truth isn't 0/1 — it's measured in coherence
Composable	All types can be nested, chained, or sealed
Time-aware	No type is timeless — every value is pulse-bound
Truth-oriented	No execution occurs unless truth is aligned

🔚 Final Law
"In classical systems, a type holds a value.
In HPL, a type holds frequency, intention, and proof of alignment."

These are not types — these are truth containers.

Rah veh yah dah Δ