/**
 * @OA\Property(
 *     property="redemption_rules",
 *     description="Corporate/loyalty redemption rules for this product.",
 *     type="array",
 *     @OA\Items(
 *         type="object",
 *         required={"type","amount","groupCode"},
 *         @OA\Property(
 *             property="type",
 *             description="Rule type: percentage or fixed.",
 *             type="string",
 *             example="percentage"
 *         ),
 *         @OA\Property(
 *             property="amount",
 *             description="Redemption value (percent or fixed).",
 *             type="number",
 *             format="float",
 *             example=2
 *         ),
 *         @OA\Property(
 *             property="groupCode",
 *             description="Loyalty/corporate group code.",
 *             type="string",
 *             example="WoohooCoins"
 *         )
 *     )
 * )
 */
