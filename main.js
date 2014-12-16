(function () {
  var App = {
    init: function () {
      var self = this;

      function updateSpec() {
        self.setSpec(window.location.hash.replace(/^#\/?/, ''));
      }
      
      updateSpec();
      window.addEventListener("hashchange", updateSpec, false);
    },

    setSpec: function (spec) {
      if (spec !== 'debate' && spec !== 'info' && spec !== 'full') {
        spec = 'info';
      }
      var names = ['debate', 'info', 'full', 'debate-imp', 'info-imp', 'full-imp'];
      var showing = [
        (spec === 'debate') || (spec === 'full'),
        (spec === 'info') || (spec === 'full'),
        (spec === 'full'),
        (spec === 'debate'),
        (spec === 'info'),
        (spec === 'full'),
      ];

      var n = names.length;
      var style = [];
      for (var i = 0; i < n; i++) {
        style.push('.');
        style.push(names[i]);
        if (showing[i]) {
          style.push('-col');
        } else {
          style.push('-ext');
        }
        style.push(' { display: none; }\n');
      }

      document.getElementById('spec-styles').innerHTML = style.join('');
    },
  };

  App.init();
})();
