export type ApiCategoriesResponse = {
  id: string;
  name: string;
}[];

export type ProductsResults = {
  id: string;
  site_id: string;
  title: string;
  seller: {
    id: number;
    permalink: string;
    registration_date: string;
    car_dealer: boolean;
    real_estate_agency: boolean;
    tags: string[];
    seller_reputation: {
      power_seller_status: string;
      level_id: string;
      metrics: {
        cancellations: {
          period: string;
          rate: number;
          value: number;
        };
        claims: {
          period: string;
          rate: number;
          value: number;
        };
        delayed_handling_time: {
          period: string;
          rate: number;
          value: number;
        };
        sales: {
          period: string;
          completed: number;
        };
      };
      transactions: {
        canceled: number;
        period: string;
        total: number;
        ratings: {
          negative: number;
          neutral: number;
          positive: number;
        };
        completed: number;
      };
    };
  };
  price: number;
  prices: {
    id: string;
    prices: [
      {
        id: string;
        type: string;
        amount: number;
        regular_amount: unknown;
        currency_id: string;
        last_updated: string;
        conditions: {
          context_restrictions: [];
          start_time: unknown;
          end_time: unknown;
          eligible: boolean;
        };
        exchange_rate_context: string;
        metadata: { promotion_id: string; promotion_type: string };
      },
      {
        id: string;
        type: string;
        amount: number;
        regular_amount: number;
        currency_id: string;
        last_updated: string;
        conditions: {
          context_restrictions: string[];
          start_time: string;
          end_time: string;
          eligible: boolean;
        };
        exchange_rate_context: string;
        metadata: {
          promotion_id: string;
          promotion_type: string;
        };
      },
    ];
    presentation: {
      display_currency: string;
    };
    payment_method_prices: [];
    reference_prices: [
      {
        id: string;
        type: string;
        conditions: {
          context_restrictions: string[];
          start_time: unknown;
          end_time: unknown;
          eligible: boolean;
        };
        amount: number;
        currency_id: string;
        exchange_rate_context: string;
        tags: [];
        last_updated: string;
      },
    ];
    purchase_discounts: [];
  };
  sale_price: unknown;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
  };
  address: {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
  };
  shipping: {
    free_shipping: boolean;
    mode: string;
    tags: [];
    logistic_type: string;
    store_pick_up: boolean;
  };
  seller_address: {
    id: string;
    comment: string;
    address_line: string;
    zip_code: string;
    country: {
      id: string;
      name: string;
    };
    state: {
      id: string;
      name: string;
    };
    city: {
      id: string;
      name: string;
    };
    latitude: string;
    longitude: string;
  };
  attributes: [
    {
      values: [
        {
          source: number;
          id: unknown;
          name: string;
          struct: unknown;
        },
      ];
      attribute_group_id: string;
      name: string;
      value_id: unknown;
      value_name: string;
      value_struct: unknown;
      id: string;
      attribute_group_name: string;
      source: number;
    },
    {
      id: string;
      value_struct: unknown;
      attribute_group_id: string;
      attribute_group_name: string;
      name: string;
      value_id: string;
      value_name: string;
      values: [
        {
          id: string;
          name: string;
          struct: unknown;
          source: number;
        },
      ];
      source: number;
    },
    {
      id: string;
      name: string;
      attribute_group_name: string;
      value_id: unknown;
      value_name: string;
      value_struct: {
        number: number;
        unit: string;
      };
      values: [
        {
          id: unknown;
          name: string;
          struct: {
            number: number;
            unit: string;
          };
          source: number;
        },
      ];
      attribute_group_id: string;
      source: number;
    },
    {
      value_id: unknown;
      value_name: string;
      values: [
        {
          id: unknown;
          name: string;
          struct: unknown;
          source: number;
        },
      ];
      attribute_group_id: string;
      id: string;
      name: string;
      source: number;
      value_struct: unknown;
      attribute_group_name: string;
    },
  ];
  original_price: unknown;
  category_id: string;
  official_store_id: number;
  domain_id: string;
  catalog_product_id: unknown;
  tags: string[];
  order_backend: number;
  use_thumbnail_id: boolean;
  offer_score: unknown;
  offer_share: unknown;
  match_score: unknown;
  winner_item_id: unknown;
  melicoin: unknown;
};

export type ApiProductsResponse = {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  };
  results: Array<ProductsResults>;
  sort: {
    id: string;
    name: string;
  };
  available_sorts: { id: string; name: string }[];
  filters: [];
  available_filters: {
    id: string;
    name: string;
    type: string;
    values: {
      id: string;
      name: string;
      results: number;
    }[];
  }[];
};
