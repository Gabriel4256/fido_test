// Server

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./'));
app.get('/api', (req, res) => {
    // decode the clientDataJSON into a utf-8 string
    const utf8Decoder = new TextDecoder('utf-8');
    const decodedClientData = utf8Decoder.decode(
        credential.response.clientDataJSON)
    
    // parse the string as an object
    const clientDataObj = JSON.parse(decodedClientData);
    
    console.log(clientDataObj)
    
    const decodedAttestationObj = CBOR.decode(
        credential.response.attestationObject);
    
    console.log(decodedAttestationObject);
    
    const {authData} = decodedAttestationObject;
    
    // get the length of the credential ID
    const dataView = new DataView(
        new ArrayBuffer(2));
    const idLenBytes = authData.slice(53, 55);
    idLenBytes.forEach(
        (value, index) => dataView.setUint8(
            index, value));
    const credentialIdLength = dataView.getUint16();
    
    // get the credential ID
    const credentialId = authData.slice(
        55, 55 + credentialIdLength);
    
    // get the public key object
    const publicKeyBytes = authData.slice(
        55 + credentialIdLength);
    
    // the publicKeyBytes are encoded again as CBOR
    const publicKeyObject = CBOR.decode(
        publicKeyBytes.buffer);
    console.log(publicKeyObject)
});



app.listen(port, () => {
    console.log("listenign at " + port);
})
//Server