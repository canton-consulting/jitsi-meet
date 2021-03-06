/* jshint maxlen:false */

var config = { // eslint-disable-line no-unused-vars
//    configLocation: './config.json', // see ./modules/HttpConfigFetch.js
    hosts: {
        domain: 'conf.cantonconsulting.info',
        //anonymousdomain: 'guest.example.com',
        //authdomain: 'conf.cantonconsulting.info',  // defaults to <domain>
        muc: 'conference.conf.cantonconsulting.info', // FIXME: use XEP-0030
        //jirecon: 'jirecon.conf.cantonconsulting.info',
        //call_control: 'callcontrol.conf.cantonconsulting.info',
        //focus: 'focus.conf.cantonconsulting.info', // defaults to 'focus.conf.cantonconsulting.info'
    },
//  getroomnode: function (path) { return 'someprefixpossiblybasedonpath'; },
//  useStunTurn: true, // use XEP-0215 to fetch STUN and TURN server
//  useIPv6: true, // ipv6 support. use at your own risk
    useNicks: false,
    bosh: '//conf.cantonconsulting.info/http-bind', // FIXME: use xep-0156 for that
    clientNode: 'http://jitsi.org/jitsimeet', // The name of client node advertised in XEP-0115 'c' stanza
    //focusUserJid: 'focus@auth.conf.cantonconsulting.info', // The real JID of focus participant - can be overridden here
    //defaultSipNumber: '', // Default SIP number

    // Desktop sharing method. Can be set to 'ext', 'webrtc' or false to disable.
    desktopSharingChromeMethod: 'ext',
    // The ID of the jidesha extension for Chrome.
    desktopSharingChromeExtId: 'ecnmodpglpcdkhefgiipcppbkkialcik',
    // The media sources to use when using screen sharing with the Chrome
    // extension.
    desktopSharingChromeSources: ['screen', 'window', 'tab'],
    // Required version of Chrome extension
    desktopSharingChromeMinExtVersion: '0.1',

    // The ID of the jidesha extension for Firefox. If null, we assume that no
    // extension is required.
    desktopSharingFirefoxExtId: "ccinfo@conf.cantonconsulting.info",
    // Whether desktop sharing should be disabled on Firefox.
    desktopSharingFirefoxDisabled: false,
    // The maximum version of Firefox which requires a jidesha extension.
    // Example: if set to 41, we will require the extension for Firefox versions
    // up to and including 41. On Firefox 42 and higher, we will run without the
    // extension.
    // If set to -1, an extension will be required for all versions of Firefox.
    desktopSharingFirefoxMaxVersionExtRequired: 51,
    // The URL to the Firefox extension for desktop sharing.
    desktopSharingFirefoxExtensionURL: "https://conf.cantonconsulting.info/jidesha-0.1.1-fx.xpi",

    // Disables ICE/UDP by filtering out local and remote UDP candidates in signalling.
    webrtcIceUdpDisable: false,
    // Disables ICE/TCP by filtering out local and remote TCP candidates in signalling.
    webrtcIceTcpDisable: false,

    openSctp: true, // Toggle to enable/disable SCTP channels
    disableStats: false,
    disableAudioLevels: false,
    channelLastN: -1, // The default value of the channel attribute last-n.
    enableRecording: false,
    enableWelcomePage: true,
    enableClosePage: true, // enabling the close page will ignore the welcome page redirection when call is hangup
    disableSimulcast: false,
    logStats: false, // Enable logging of PeerConnection stats via the focus
    requireDisplayName: true, // Forces the participants that doesn't have display name to enter it when they enter the room.
    startAudioMuted: 5, // every participant after the Nth will start audio muted
    startVideoMuted: 10, // every participant after the Nth will start video muted
    defaultLanguage: "fr",
// To enable sending statistics to callstats.io you should provide Applicaiton ID and Secret.
    callStatsID: "439829406", // Application ID for callstats.io API
    callStatsSecret: "biZk7WqrVoDP:Uyo+YMyx59pv0q0Rl+mlLnWsflL1TIqhsERsiDrLwFQ=", // Secret for callstats.io API
    /*noticeMessage: 'Service update is scheduled for 16th March 2015. ' +
    'During that time service will not be available. ' +
    'Apologise for inconvenience.',*/
    disableThirdPartyRequests: false,
    minHDHeight: 540,
    // If true - all users without token will be considered guests and all users
    // with token will be considered non-guests. Only guests will be allowed to
    // edit their profile.
    enableUserRolesBasedOnToken: true,
    // Suspending video might cause problems with audio playback. Disabling until these are fixed.
    disableSuspendVideo: true,
	etherpad_base: "https://conf.cantonconsulting.info/etherpad/p/",
    // disables or enables RTX (RFC 4588) (defaults to false).
    disableRtx: false,
    // Sets the preferred resolution (height) for local video. Defaults to 360.
    resolution: 720
};
