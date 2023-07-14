/*
 * JavaScript client-side example using jsrsasign
 */

// #########################################################
// #             WARNING   WARNING   WARNING               #
// #########################################################
// #                                                       #
// # This file is intended for demonstration purposes      #
// # only.                                                 #
// #                                                       #
// # It is the SOLE responsibility of YOU, the programmer  #
// # to prevent against unauthorized access to any signing #
// # functions.                                            #
// #                                                       #
// # Organizations that do not protect against un-         #
// # authorized signing will be black-listed to prevent    #
// # software piracy.                                      #
// #                                                       #
// # -QZ Industries, LLC                                   #
// #                                                       #
// #########################################################

/**
 * Depends:
 *     - jsrsasign-latest-all-min.js
 *     - qz-tray.js
 *
 * Steps:
 *
 *     1. Include jsrsasign 8.0.4 into your web page
 *        <script src="https://cdn.rawgit.com/kjur/jsrsasign/c057d3447b194fa0a3fdcea110579454898e093d/jsrsasign-all-min.js"></script>
 *
 *     2. Update the privateKey below with contents from private-key.pem
 *
 *     3. Include this script into your web page
 *        <script src="path/to/sign-message.js"></script>
 *
 *     4. Remove or comment out any other references to "setSignaturePromise"
 */
var privateKey =
  "-----BEGIN PRIVATE KEY-----\n" +
  "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDLIkXZSCcZZfVv\n" +
  "21hOEykV5IvFpsdMEodAPh89LUBU2Xi7F2xjlfEyKgWs9Fb+FxJzfuS19wy6pqSE\n" +
  "raqvlx0Ea8BLju5ACf/PH47gnfvVYQv6LTa73x2z9xkNj7A0yVKoAWC+MFbwEUSH\n" +
  "DGtNzMQry+IGrdr+R82MfvFNeA4rX6l1fFw0JrlMeuOVjj8aURnI6tbw9gxGOcmU\n" +
  "yaEeyoY0DvsTDwzbmFzZffzJND5m3pwdu1Holqi+K+F4ULJWE09iz6W25aphQPHL\n" +
  "NmbRIj/c3LuFLI8eXElY93g0PK70MNR70PoikE/SVJ/2D1mkpwKl0wkvc4Bjg4IH\n" +
  "1gqi6m6jAgMBAAECggEBAKDM7awWANWLL6IvaZTMeB6bf8Wjw2pF1IkXZBVCiAVi\n" +
  "7b50yVl/7aH/P+TsuxyC2RlSXuxot8vddKiO7Wn4XoEMZvmpGJLbF4Q3gBvxE9SS\n" +
  "8S9GsWhBM7stpMhmcV8n62WRSarkiz2Y/b1GKH861COzTqZo482cu2s3Zf8kRVsx\n" +
  "AffgVz7LAel8Mirjebg1oYvFjfbnpewGkRXVxCh+JPXiyndB2aQTZNqFhF8+o3If\n" +
  "Cf3te6pEJbzek3kc2Ffl8xhCmUMKzXUKjtiILPIvS9MkWvijMHjNO1/OY5aWoPR1\n" +
  "wHUpjPBTPB8v3EArJhcJlCtd+NY05b3L+YFdBT8mKMECgYEA9OqLHogJYeXarapJ\n" +
  "qePgnZD1ZFKhL6zYj4FDbhWzuIpjabcXnseCB5QK9h0dfCPK7O+tl4tePt25goes\n" +
  "SgutoUWLCNpclSqG+avrwsfslHg1idrW8szUmldDIE6BI8aUM9oV7UrX8BoCNpK8\n" +
  "U3M4GZ/CKV6XO9SAQpJhpJuHzMMCgYEA1FOp9KZp+L0iD3Gfdu5KGv2w5ewMOxUv\n" +
  "eyQxosb+fRJHdWtmd8uDtn9QqEpC3tHKtN/iB4/GniDzJDSatW8Qf/NTZideJRG8\n" +
  "pjVGYT/3ngxHeQ29haOoR8uUFY1nJSzq4U84SKo5BAJXJEoJpB4pFdCg/fSMaDtp\n" +
  "rEx4d2/oOKECgYAI4Rf6G2R7sCGlei8Bgcl67O54nKZLXDDdwwn2y8KgRiQkiQbK\n" +
  "MuF79NoQ4i1XetS4klfwzpS0IsW+/bw5UwMQfbz0rTX+EnSiSKFbhnQFTfZi8RQp\n" +
  "6VMr5U4BtdbovSJSXu28lKIPimHaKKe7Psoh47DeXxeMi7+6qiPwG9NokQKBgQDC\n" +
  "S0jz0jCY6GG5pizZRRbU+h8dVtKeYjWPxsARB22rf8WaQkyDBN2ja3+gcEwe3/VR\n" +
  "bKnGZ5/F5br4/5YuvtJnc392tEGnRELQCWI87a8mlm/060jpeKguArGgw0OGtkK9\n" +
  "KKQFgpcn/whE8ec+okbQaphXq6esXenGPDfke6gR4QKBgQC1IHvN5UnrbRqmJ2Fz\n" +
  "pKgSsKko+Lmu5xUaimnli8dg+mDv7QR37YWf5rXgNQf6s0vbNFLKy+drCsVwYO3s\n" +
  "j9WgpO5YHyby8jhwTh/Ht0Jom8/6ILUpszuBVXUpoyO4psczL2ws4/BGQkB2P3YE\n" +
  "qB/xl7KczThQ+qzVqMTGRjk0tA==\n" +
  "-----END PRIVATE KEY-----";

qz.security.setSignatureAlgorithm("SHA512"); // Since 2.1
qz.security.setSignaturePromise(function (toSign) {
  return function (resolve, reject) {
    try {
      var pk = KEYUTIL.getKey(privateKey);
      var sig = new KJUR.crypto.Signature({ alg: "SHA512withRSA" }); // Use "SHA1withRSA" for QZ Tray 2.0 and older
      sig.init(pk);
      sig.updateString(toSign);
      var hex = sig.sign();
      console.log("DEBUG: \n\n" + stob64(hextorstr(hex)));
      resolve(stob64(hextorstr(hex)));
    } catch (err) {
      console.error(err);
      reject(err);
    }
  };
});
