
class JsonBinInfo {
  constructor(binId, secretKey){
    this.binId = binId;
    this.secretKey = secretKey;
    this.cached = null;
  }

  newId(){
    return "" + new Date().getTime();
  }

  getUrl(){
    return `https://api.jsonbin.io/b/${this.binId}/latest`;
  }

  saveUrl(){
    return `https://api.jsonbin.io/b/${this.binId}`;
  }

  headers(){
    const h = new Headers();
    h.append('content-type', 'application/json');
    if (this.secretKey){
      h.append('secret-key', this.secretKey);
    }
    return h;
  }

  get(callback){
    const self = this;
    if (self.cached){
      console.log(self.cached);
      callback(self.cached);
    } else {
      fetch(self.getUrl(), {
        method: 'GET',
        headers: self.headers(),
        // mode: 'cors',
      })
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
    const self = this;
    const json = JSON.stringify(data);
    fetch(self.saveUrl(), {
      method: 'PUT',
      headers: self.headers(),
      // mode: 'cors',
      body: json,
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(success => {
      console.log(success);
      self.cached = success.data;
      callback(success.data);
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
      self.save(data, saved => {
        callback(saved[key]);
      });
    })
  }

  delete(key, id, callback){
    const self = this;
    self.cached = null;
    self.get(data => {
      let posts = data[key] || [];
      posts = posts.filter(b => b.id !== id);
      data[key] = posts;
      self.save(data, saved => {
        callback(saved[key]);
      });
    })
  }
}

class Comments {
  constructor(info, key, viewId, formId){
    this.info = info;
    this.key = key;
    this.formElm = document.getElementById(formId);
    this.viewElm = document.getElementById(viewId);
    this.loadElm = document.createElement('div');
    this.loadElm.innerHTML = 'loading...';
    this.formElm.parentNode.insertBefore(this.loadElm, this.formElm);
    this.hideForm();
    this.get();

    const self = this;
    self.formElm.addEventListener('submit', event => {
      event.preventDefault();
      self.hideForm();
      self.create();
      return false;
    });
    self.viewElm.addEventListener('click', event => {
      const elm = event.target;
      if (elm && elm.matches("a.comment-delete")) {
        const id = elm.dataset.id;
        delete elm.dataset.id;
        elm.innerHTML="working... "
        self.delete(id);
      }
    });
  }

  hideForm(){
    this.formElm.classList.add('comment-form-hidden');
    this.loadElm.classList.remove('comment-form-hidden');
  }

  showForm(){
    this.formElm.classList.remove('comment-form-hidden');
    this.loadElm.classList.add('comment-form-hidden');
  }

  get(){
    const self = this;
    self.info.getByKey(this.key, comments => {
      const commentHtml = self.generateHtml(comments);
      // todo setup delete listeners
      self.viewElm.innerHTML = commentHtml;
      this.showForm();
    });
  }

  delete(id){
    if (id){
      this.info.delete(this.key, id, () => this.get());
    }
  }

  create(){
    const blob = {
      name: this.formElm.elements.name.value,
      text: this.formElm.elements.text.value,
    };
    this.info.create(this.key, blob, () => {
      this.get();
      this.showForm();
    });
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
