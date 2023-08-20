const express = require("express");
const nftControllers = require("./../controllers/nftControllers")
const router = express.Router();

/* router.param("id", nftControllers.checkId)
 */
router.route("/").get(nftControllers.getAllNfts).post( /* nftControllers.checkBody, */ nftControllers.createNft);
router.route("/:id").get(nftControllers.getSingleNft).patch(nftControllers.updateNft).delete(nftControllers.deleteNft);
module.exports = router;