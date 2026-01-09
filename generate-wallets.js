const { ethers } = require('ethers');
const fs = require('fs');

/**
 * Generate EVM wallets and save to CSV
 */
async function generateWallets() {
    const walletCount = 1000;
    const wallets = [];

    console.log(`Generating ${walletCount} EVM wallets...`);

    // Generate wallets
    for (let i = 0; i < walletCount; i++) {
        const wallet = ethers.Wallet.createRandom();
        wallets.push({
            index: i + 1,
            address: wallet.address,
            privateKey: wallet.privateKey
        });

        if ((i + 1) % 100 === 0) {
            console.log(`Generated ${i + 1} wallets...`);
        }
    }

    console.log(`Generated ${walletCount} wallets successfully!`);

    // Create CSV content
    const csvHeader = 'Index,Address,PrivateKey\n';
    const csvRows = wallets.map(w =>
        `${w.index},"${w.address}","${w.privateKey}"`
    ).join('\n');
    const csvContent = csvHeader + csvRows;

    // Save to file
    const filename = 'evm_wallets.csv';
    fs.writeFileSync(filename, csvContent, 'utf8');

    console.log(`\nWallets saved to ${filename}`);
    console.log(`Total wallets: ${walletCount}`);
    console.log(`\nFirst wallet:`);
    console.log(`  Address: ${wallets[0].address}`);
    console.log(`  Private Key: ${wallets[0].privateKey}`);
}

// Run the generator
generateWallets().catch(error => {
    console.error('Error generating wallets:', error);
    process.exit(1);
});
