# zkEventCheckin

zkEventCheckin is a Solana-based application that enables event creators to mint compressed tokens (cTokens) for events and distribute them to attendees via QR codes. Leveraging Light Protocol, Solana Pay, and ZK Compression, it ensures scalability, low on-chain state costs, and secure, seamless token distribution while prioritizing privacy and performance.

## Features

- **Event Token Minting**: Creators can mint compressed tokens for their events.
- **Secure Vaults**: Each event has a dedicated vault to securely hold cTokens.
- **QR Code Distribution**: Solana Pay QR codes are generated for attendees to scan.
- **One-Click Token Transfer**: Scanning a QR code transfers 1 cToken from the event vault to the user's wallet.
- **Scalability & Privacy**: Built with ZK Compression for cost-efficient, private transactions.
- **Single-Claim Enforcement**: Prevents users from claiming a token more than once.
- **Composability**: Designed to integrate seamlessly with other Solana-based systems.

## 🛠️ Tech Stack

- **Light Protocol**: ZK compression and compressed token management.
- **Solana Pay**: QR-based wallet interactions for token transfers.
- **Next.js + TypeScript**: Frontend framework for a responsive UI.
- **PostgreSQL**: Stores event and user metadata.
