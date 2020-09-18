import firebase from "gatsby-plugin-firebase"

const sendFirebase = () => {};
export const firebaseLog = (name, params) => sendFirebase.logEvent(name, params);