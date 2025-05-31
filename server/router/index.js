const Router = require('express');
const router = new Router();

const DeviceRouter = require('./DeviceRouter');
const UserRouter = require('./UserRouter'); 
const TypeRouter = require('./TypeRouter');
const BrandRouter = require('./BrandRouter');

router.use('/user', UserRouter);
router.use('/device', DeviceRouter);
router.use('/type', TypeRouter);
router.use('/brand', BrandRouter);


module.exports = router;
