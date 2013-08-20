Package.describe({
  summary: "Load the Pixlr API into the client"
});

Package.on_use(function (api) {
  if (api.export) api.export ('pixlr');
  api.add_files('pixlr.js', 'client');
});
