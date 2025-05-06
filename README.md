/**
* @OA\Get(
*     path="/rest/v1/homebanner/{bannertype}",
*     tags={"Home Banner API"},
*     operationId="HomeBannerTypeV1",
*     summary="Get home banners by type",
*     description="Retrieve all home banners for the specified banner type and platform (e.g., web, mobile, ewgc).

**Error Codes:**
- 14510: Banner type is invalid
- 14511: No banners found",
*     security={{"OAuth2": {"retrieve"}}},
*     x={
*         "internal": true,
*         "guestApi": true,
*         "customerApi": true
*     },
*     @OA\Parameter(
*         name="bannertype",
*         in="path",
*         required=true,
*         description="The type of banner to retrieve. Possible values: 'web', 'mobile', 'ewgc'.",
*         @OA\Schema(type="string")
*     ),
*     @OA\Response(
*         response="200",
*         description="Success",
*         @OA\JsonContent(ref="#/components/schemas/HomebannerListResponse")
*     ),
*     @OA\Response(
*         response="401",
*         description="Unauthorized",
*         @OA\JsonContent(ref="#/components/schemas/BalanceV3Res401")
*     ),
*     @OA\Response(
*         response="500",
*         description="QwikGiftAPI Server Error",
*         @OA\JsonContent(ref="#/components/schemas/Res500")
*     )
* )
*/
