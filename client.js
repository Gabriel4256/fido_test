// Client

let randomStringFromServer = "aafdlfdjldjlkdflkllaa";

const publicKeyCredentialCreationOptions = {
    challenge: Uint8Array.from(
        randomStringFromServer, c => c.charCodeAt(0)),
    rp: {
        name: "localhost",
        id: "localhost",
    },
    user: {
        id: Uint8Array.from(
            "UZSL85T9AFC", c => c.charCodeAt(0)),
        name: "lee@webauthn.guide",
        displayName: "Lee",
    },
    pubKeyCredParams: [{alg: -7, type: "public-key"}],
    authenticatorSelection: {
        authenticatorAttachment: "platform",
        requireResidentKey: false,
        userVerification: "discouraged"
    },
    timeout: 60000,
    attestation: "none"
};

console.log(publicKeyCredentialCreationOptions)

async function aa (){
    const credential = await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions
    });

    console.log(credential);
}

aa().catch(e => {
    console.log(e);
});

// Client


