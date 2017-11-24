CFC = window;
CFC.Comments = Comments;

class JsonBinInfo {
  constructor(binId, secretKey){
    this.binId = binId;
    this.secretKey = secretKey;
    this.cached = null;
    // cache on get + after save
    // bust cache when getting before save, to remove race conditions
  }

  newId(){
    return new Date().getTime();
  }

  url(){
    return `https://api.jsonbin.io/b/${this.binId}`;
  }

  headers(){
    return {
      'secret-key': this.secretKey,
    };
  }

  get(callback){
    const self = this;
    if (self.cached){
      callback(self.cached);
    } else {
      // todo fetch with headers
      fetch(self.url())
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          self.cached = data;
          callback(data);
        });
      }
  }

  save(data, callback){
    // todo fetch with headers
    // todo PUT
    // todo use json as data
    const self = this;
    const json = JSON.stringify(data);
    fetch(self.url())
      .then(response => {
        return response.json();
      })
      .then(data => {
        self.cached = data;
        callback(data);
      });
  }

  getByKey(key, callback){
    this.get(data => {
      callback(data[key] || []);
    })
  }

  create(key, blob, callback){
    const self = this;
    self.cached = null;
    self.get(data => {
      blob.id = this.newId();
      let posts  = data[key] || [];
      posts.push(blob);
      data[key] = posts;
      self.save(data, callback);
    })
  }

  delete(key, id, callback){
    const self = this;
    self.cached = null;
    self.get(data => {
      let posts = data[key] || [];
      posts = posts.filter(b => b.id !== id);
      data[key] = posts;
      self.save(data, callback);
    })
  }
}

class Comments {
  constructor(info, key, viewId, formId){
    this.info = info;
    this.key = key;
    this.viewElm = document.getElementById(viewId);
    this.get();

    const formElm = document.getElementById(formId);
    // todo setup onSubmit
  }

  get(){
    const self = this;
    self.info.getByKey(this.key, comments => {
      const commentHtml = self.generateHtml(comments);
      // todo setup delete listeners
      self.viewElm.innerHTML = commentHtml;
    });
  }

  delete(id){
    this.info.delete(this.key, id, () => this.get());
  }

  create(formElm){
    const blob = {
      // todo extract name/text from formElm
    };
    this.info.create(this.key, blob, () => this.get());
  }

  generateHtml(comments){
    let commentHtml = '';
    comments.forEach(function (c){
      commentHtml += `
        <div class="comment-container">
          <a class="comment-delete" data-id="${c.id}"></a>
          <div class="comment-name">${c.name}</div>
          <div class="comment-text">${c.text}</div>
        </div>
      `;
    });
    if (commentHtml.length === 0){
      commentHtml = `
        <div class="comments-empty">
          Nobody has left a comment yet.
        </div>
      `;
    }
    return `
      <div class="comments-top-container">
        <div class="comments-top-header">Comments</div>
        ${commentHtml}
      </div>
    `;
  }
}
