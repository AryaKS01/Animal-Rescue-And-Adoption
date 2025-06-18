@OA\Property(
    property="redemption_rules",
    description="List of corporate discount or redemption rules applicable for this product",
    type="array",
    @OA\Items(
        type="object",
        @OA\Property(
            property="type",
            description="Type of discount or redemption rule. Possible values: percentage, fixed.",
            type="string",
            example="percentage"
        ),
        @OA\Property(
            property="amount",
            description="Amount of the discount or redemption. For percentage type, it is a percentage value.",
            type="number",
            format="float",
            example=2
        ),
        @OA\Property(
            property="groupCode",
            description="Code representing the discount or loyalty group, e.g., WoohooCoins.",
            type="string",
            example="WoohooCoins"
        )
    )
),
