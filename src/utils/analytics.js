import firebase from "gatsby-plugin-firebase"

const sendFirebase = firebase ? firebase.analytics() : () => {};
export const firebaseLog = (name, params) => sendFirebase.logEvent(name, params);