import firebase from "gatsby-plugin-firebase"

const sendFirebase = (typeof window !== 'undefined' && !window.NetlifyCmsApp) ? firebase.analytics() : {};
export const firebaseLog = (name, params) => sendFirebase.logEvent(name, params);