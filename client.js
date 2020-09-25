// Client

// let randomStringFromServer = "aafdlfdjldjlkdflkllaa";

// const publicKeyCredentialCreationOptions = {
//     challenge: Uint8Array.from(
//         randomStringFromServer, c => c.charCodeAt(0)),
//     rp: {
//         name: "localhost",
//         // id: "localhost",
//     },
//     user: {
//         id: Uint8Array.from(
//             "UZSL85T9AFC", c => c.charCodeAt(0)),
//         name: "lee@webauthn.guide",
//         displayName: "Lee",
//     },
//     pubKeyCredParams: [{alg: -7, type: "public-key"}],
//     authenticatorSelection: {
//         authenticatorAttachment: "platform",
//         requireResidentKey: false,
//         userVerification: "discouraged"
//     },
//     timeout: 60000,
//     attestation: "none"
// };

// console.log(publicKeyCredentialCreationOptions)

// async function aa (){
//     const credential = await navigator.credentials.create({
//         publicKey: publicKeyCredentialCreationOptions
//     });

//     // console.log(credential);
// }

// aa().catch(e => {
//     console.log(e);
// });

// Client

var challenge = new Uint8Array(32);
window.crypto.getRandomValues(challenge);

var userID = 'Kosv9fPtkDoh4Oz7Yq/pVgWHS8HhdlCto5cR0aBoVMw='
var id = Uint8Array.from(window.atob(userID), c=>c.charCodeAt(0))

var publicKey = {
    'challenge': challenge,

    'rp': {
        'name': 'Example Inc.'
    },

    'user': {
        'id': id,
        'name': 'alice@example.com',
        'displayName': 'Alice Liddell'
    },

    'pubKeyCredParams': [
        { 'type': 'public-key', 'alg': -7  },
        { 'type': 'public-key', 'alg': -257 }
    ]
}

navigator.credentials.create({ 'publicKey': publicKey })
    .then((newCredentialInfo) => {
        console.log('SUCCESS', newCredentialInfo)
    })
    .catch((error) => {
        console.log('FAIL', error)
    })
