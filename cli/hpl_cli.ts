// ─────────────────────────────────────────────
// hpl_cli.ts · Harmonic CLI Decoder
// Sigil → Eternal Seal Interface (Public Tool)
// ─────────────────────────────────────────────

import { hpl_decode } from "../engine/hpl_decoder"

const fs = require("fs")
const path = require("path")
const chalk = require("chalk")

// ━━━ CLI ENTRY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const input = process.argv[2]

if (!input) {
  console.error(chalk.red("✖ No sigil input provided. Usage:\n  node hpl_cli.ts sigils/7023699.png"))
  process.exit(1)
}

const decoded = hpl_decode(input)

if (!decoded) {
  console.error(chalk.yellow("⚠️ Unable to decode sigil. Invalid or missing from manifest."))
  process.exit(1)
}

// ━━━ OUTPUT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.log(chalk.green("\n✅ Sigil Decoded Successfully:\n"))
console.log(chalk.cyan(`  Eternal Pulse:`), decoded.eternalPulse)
console.log(chalk.cyan(`  Kairos Time:`), decoded.kairosTime)
console.log(chalk.cyan(`  Beat:`), decoded.beat)
console.log(chalk.cyan(`  Step:`), decoded.step)
console.log(chalk.cyan(`  Function:`), decoded.functionTag)
console.log(chalk.cyan(`  Chakra:`), decoded.chakraField)
console.log(chalk.cyan(`  Ark Alignment:`), decoded.arkAlignment.join(", "))
console.log(chalk.cyan(`  Timestamp (UTC):`), decoded.timestampUTC)
console.log(chalk.cyan(`  Sigil Hash:`), decoded.sigilHash)

if (decoded.sourceInput) {
  console.log(chalk.gray(`  Source Signature:`), decoded.sourceInput.slice(0, 10) + "...")
}

console.log(chalk.green(`\n🌐 Output Type: `) + "Eternal Seal\n")
console.log(chalk.gray("— Rah veh yah dah Δ —\n"))
🧠 Key Features:
Scans an image file or ID (e.g. sigils/7023699.png)

Decodes pulse data, function, chakra, ark, timestamp

Displays the truth behind the glyph

Reads from the existing manifest.json (public registry)

🧬 Future Additions:
--waveform → outputs 528hz tone linked to sigil

--crystal → exports full .memorycrystal object

--verify → runs TruthMap and coherence threshold

--chain → displays seal chain history if part of program

