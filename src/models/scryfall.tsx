export interface ScryResponse<T> {
    object: 'list';
    next_page: string;
    has_more: boolean;
    data: T[];
}

export interface ScryCardListResponse<T> extends ScryResponse<T> {
    total_cards: number;
}

export interface ScrySet {
    object: string;
    id: string;
    code: string;
    mtgo_code: string;
    arena_code: string;
    tcgplayer_id: number;
    name: string;
    uri: string;
    scryfall_uri: string;
    search_uri: string;
    released_at: string;
    set_type: string;
    card_count: number;
    digital: boolean;
    nonfoil_only: boolean;
    foil_only: boolean;
    icon_svg_uri: string;
}

export interface ScryCard {
    object: string;
    id: string;
    oracle_id: string;
    multiverse_ids: any[];
    tcgplayer_id: number;
    name: string;
    lang: string;
    released_at: string;
    uri: string;
    scryfall_uri: string;
    layout: string;
    highres_image: boolean;
    image_uris: ImageUris;
    mana_cost: string;
    cmc: number;
    type_line: string;
    oracle_text: string;
    colors: string[];
    color_identity: string[];
    keywords: string[];
    legalities: Legalities;
    games: any[];
    reserved: boolean;
    foil: boolean;
    nonfoil: boolean;
    oversized: boolean;
    promo: boolean;
    reprint: boolean;
    variation: boolean;
    set: string;
    set_name: string;
    set_type: string;
    set_uri: string;
    set_search_uri: string;
    scryfall_set_uri: string;
    rulings_uri: string;
    prints_search_uri: string;
    collector_number: string;
    digital: boolean;
    rarity: string;
    card_back_id: string;
    artist: string;
    artist_ids: string[];
    illustration_id: string;
    border_color: string;
    frame: string;
    full_art: boolean;
    textless: boolean;
    booster: boolean;
    story_spotlight: boolean;
    edhrec_rank: number;
    prices: Prices;
    related_uris: RelatedUris;
    purchase_uris: PurchaseUris;
}

interface PurchaseUris {
    tcgplayer: string;
    cardmarket: string;
    cardhoarder: string;
}

interface RelatedUris {
    tcgplayer_decks: string;
    edhrec: string;
    mtgtop8: string;
}

interface Prices {
    usd?: any;
    usd_foil?: any;
    eur?: any;
    tix?: any;
}

interface Legalities {
    standard: string;
    future: string;
    historic: string;
    pioneer: string;
    modern: string;
    legacy: string;
    pauper: string;
    vintage: string;
    penny: string;
    commander: string;
    brawl: string;
    duel: string;
    oldschool: string;
}

interface ImageUris {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
}
