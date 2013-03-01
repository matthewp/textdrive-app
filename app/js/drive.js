/*
** Constructor
 */
function GoogleDrive() {
  this.CLIENT_ID = '496966620330.apps.googleusercontent.com';
  this.SCOPES = 'https://www.googleapis.com/auth/drive';
}

GoogleDrive.prototype.auth = function(fn) {
  gapi.auth.authorize({
    'client_id': CLIENT_ID,
    'scope': SCOPES,
    'immediate': true
  }, this.handleAuth_.bind(this, fn));  
};

GoogleDrive.prototype.handleAuth_ = function(fn, e) {
  // TODO
};