// This function is used to decode the token and return the User ID (separate from the rest of the payload) to the caller

export default function decoder(token) {
    console.log(token)
    const payload = token?.toString().split('.')[1]
    const decodedPayload = atob(payload)
    return JSON.parse(decodedPayload) // Return the user ID

}
