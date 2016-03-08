var request = require('request');

/*
 * Layer params
 */
var subdomain = 'services1'; // 'services6' for ecologia digital
var orgId = 'RTK5Unh1Z71JKIiR';
var serviceId = 'salonga_villages';
var layerId = '0';

/*
 * Request options
 */
var options = {
  returnGeometry: true,
  where: '1=1',
  outSr: 4326,
  outFields: '*',
  inSr: 4326,
  geometry: '{"xmin":0,"ymin":-85.05112877980659,"xmax":180,"ymax":0,"spatialReference":{"wkid":4326}}',
  geometryType: 'esriGeometryEnvelope',
  spatialRel: 'esriSpatialRelIntersects',
  geometryPrecision: 6,
  f: 'geojson'
}

/*
 * The request
 */
request({
  url: 'http://'+ subdomain+'.arcgis.com/'+orgId+'/arcgis/rest/services/'+serviceId+'/FeatureServer/'+layerId+'/query',
  qs: options
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
});
