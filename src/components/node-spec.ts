export const spec = {
  openrpc: '1.2.6',
  info: {
    title: 'Celestia Node API',
    description:
      'The Celestia Node API is the collection of RPC methods that can be used to interact with the services provided by Celestia Data Availability Nodes.',
    version: 'v0.0.1',
  },
  externalDocs: {
    description: 'Celestia Node GitHub',
    url: 'https://github.com/celestiaorg/celestia-node',
  },
  methods: [
    {
      name: 'daser.SamplingStats',
      description: 'Auth level: read',
      summary:
        'SamplingStats returns the current statistics over the DA sampling process.\n',
      paramStructure: 'by-position',
      params: [],
      result: {
        name: 'das.SamplingStats',
        description: 'das.SamplingStats',
        summary: '',
        schema: {
          examples: [
            {
              head_of_sampled_chain: 27499,
              head_of_catchup: 29101,
              network_head_height: 30483,
              workers: [
                {
                  current: 28806,
                  from: 28802,
                  to: 28901,
                },
                {
                  current: 28906,
                  from: 28902,
                  to: 29001,
                },
                {
                  current: 27794,
                  from: 27702,
                  to: 27801,
                },
                {
                  current: 28191,
                  from: 28102,
                  to: 28201,
                },
                {
                  current: 28420,
                  from: 28402,
                  to: 28501,
                },
                {
                  current: 28334,
                  from: 28302,
                  to: 28401,
                },
                {
                  current: 27691,
                  from: 27602,
                  to: 27701,
                },
                {
                  current: 27889,
                  from: 27802,
                  to: 27901,
                },
                {
                  current: 27990,
                  from: 27902,
                  to: 28001,
                },
                {
                  current: 28293,
                  from: 28202,
                  to: 28301,
                },
                {
                  current: 28092,
                  from: 28002,
                  to: 28101,
                },
                {
                  current: 29004,
                  from: 29002,
                  to: 29101,
                },
                {
                  current: 28708,
                  from: 28702,
                  to: 28801,
                },
                {
                  current: 28513,
                  from: 28502,
                  to: 28601,
                },
                {
                  current: 27500,
                  from: 27402,
                  to: 27501,
                },
                {
                  current: 28615,
                  from: 28602,
                  to: 28701,
                },
              ],
              concurrency: 16,
              catch_up_done: false,
              is_running: true,
            },
          ],
          additionalProperties: false,
          properties: {
            catch_up_done: {
              type: 'boolean',
            },
            concurrency: {
              type: 'integer',
            },
            failed: {
              patternProperties: {
                '.*': {
                  type: 'integer',
                },
              },
              type: 'object',
            },
            head_of_catchup: {
              type: 'integer',
            },
            head_of_sampled_chain: {
              type: 'integer',
            },
            is_running: {
              type: 'boolean',
            },
            network_head_height: {
              type: 'integer',
            },
            workers: {
              items: {
                additionalProperties: false,
                properties: {
                  current: {
                    type: 'integer',
                  },
                  error: {
                    type: 'string',
                  },
                  from: {
                    type: 'integer',
                  },
                  to: {
                    type: 'integer',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/das/das.go#L28',
      },
    },
    {
      name: 'daser.WaitCatchUp',
      description: 'Auth level: read',
      summary:
        'WaitCatchUp blocks until DASer finishes catching up to the network head.\n',
      paramStructure: 'by-position',
      params: [],
      result: {
        name: 'Null',
        description: 'Null',
        schema: {
          type: ['null'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/das/das.go#L32',
      },
    },
    {
      name: 'fraud.Get',
      description: 'Auth level: public',
      summary: 'Get fetches fraud proofs from the disk by its type.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'proofType',
          description: 'fraud.ProofType',
          summary: '',
          schema: {
            examples: ['badencoding'],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '[]Proof',
        description: '[]Proof',
        summary: '',
        schema: {
          examples: [
            [
              {
                proof_type: 'badencoding',
                data: 'ChJiYWQgZW5jb2RpbmcgcHJvb2YQKg==',
              },
            ],
          ],
          items: [
            {
              additionalProperties: false,
              type: ['object'],
            },
          ],
          type: ['array'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/fraud/fraud.go#L35',
      },
    },
    {
      name: 'fraud.Subscribe',
      description: 'Auth level: public',
      summary:
        'Subscribe allows to subscribe on a Proof pub sub topic by its type.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'proofType',
          description: 'fraud.ProofType',
          summary: '',
          schema: {
            examples: ['badencoding'],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '\u003c-chan Proof',
        description: '\u003c-chan Proof',
        summary: '',
        schema: {
          title: 'typeUnsupportedByJSONSchema',
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/fraud/fraud.go#L31',
      },
    },
    {
      name: 'header.GetByHeight',
      description: 'Auth level: public',
      summary:
        'GetByHeight returns the ExtendedHeader at the given height, blocking\nuntil header has been processed by the store or context deadline is exceeded.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'u',
          description: 'uint64',
          summary: '',
          schema: {
            examples: [42],
            type: ['integer'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*header.ExtendedHeader',
        description: '*header.ExtendedHeader',
        summary: '',
        schema: {
          examples: [
            {
              validator_set: {
                validators: [
                  {
                    address: '57DC09D28388DBF977CFC30EF50BE8B644CCC1FA',
                    pub_key: {
                      type: 'tendermint/PubKeyEd25519',
                      value: 'aoB4xU9//HAqOP9ciyp0+PTdZxt/UGKgZOabU6JxW8o=',
                    },
                    voting_power: '5000000000',
                    proposer_priority: '0',
                  },
                ],
                proposer: {
                  address: '57DC09D28388DBF977CFC30EF50BE8B644CCC1FA',
                  pub_key: {
                    type: 'tendermint/PubKeyEd25519',
                    value: 'aoB4xU9//HAqOP9ciyp0+PTdZxt/UGKgZOabU6JxW8o=',
                  },
                  voting_power: '5000000000',
                  proposer_priority: '0',
                },
              },
              header: {
                version: {
                  block: 11,
                },
                chain_id: 'arabica-2',
                height: 42,
                time: '2022-11-15T17:04:04.364455555Z',
                last_block_id: {
                  hash: 'D35285797CB08451E8E85B97B0259A3C98E42BFCAEA5465152EE68DBD5760935',
                  parts: {
                    total: 1,
                    hash: 'EF5E90A836E5676B98177FB38B0C0BB7D957F71BBA6109B1D79C65344BC6C7FB',
                  },
                },
                last_commit_hash:
                  'DB5BB6A1518FD618D5B6607E9507E60E52BB9B532E5718D6D74F1F510FE5D10F',
                data_hash:
                  '6F52DAC16545E45725BE6EA32AED55266E45034800EEE1D87C9428F4844EA47A',
                validators_hash:
                  '883A0C92B8D976312B249C1397E73CF2981A9EB715717CBEE3800B8380C22C1D',
                next_validators_hash:
                  '883A0C92B8D976312B249C1397E73CF2981A9EB715717CBEE3800B8380C22C1D',
                consensus_hash:
                  '048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F',
                app_hash:
                  '9E52BD09B71043C25FBC7C8D928490E051811A10E978C66E3519A41352DD0699',
                last_results_hash:
                  'E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855',
                evidence_hash:
                  'E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855',
                proposer_address: '57DC09D28388DBF977CFC30EF50BE8B644CCC1FA',
              },
              commit: {
                height: 42,
                round: 0,
                block_id: {
                  hash: 'F22BAEF4D99A835D9F2CA92C58E8AA48C589284B7916FF073A1D778C73EA4CC1',
                  parts: {
                    total: 1,
                    hash: '9961CC7B6B9BE558D0FED40675232F4B37BEE75419C815240804C1A1801CF626',
                  },
                },
                signatures: [
                  {
                    block_id_flag: 2,
                    validator_address:
                      '57DC09D28388DBF977CFC30EF50BE8B644CCC1FA',
                    timestamp: '2022-11-15T17:04:29.384867372Z',
                    signature:
                      '0+INXvvzUExQToNpmQhhvFySbQYFqoYTpgFACP+3lkSWGh48ukkMMqj2UnnAzqQhabuKeXx/5f8hiwEzeMM6Dg==',
                  },
                ],
              },
              dah: {
                row_roots: [
                  '//////////7//////////rr7xfWEpBugDbgBYmKPvIOGpNDJUjrMyS17ZyAnUvK7',
                  '/////////////////////zEUYTRl2BUUeFrpCh4OmiYKeTgtgYfn/tCeVNNVTMv4',
                ],
                column_roots: [
                  '//////////7//////////rr7xfWEpBugDbgBYmKPvIOGpNDJUjrMyS17ZyAnUvK7',
                  '/////////////////////zEUYTRl2BUUeFrpCh4OmiYKeTgtgYfn/tCeVNNVTMv4',
                ],
              },
            },
          ],
          additionalProperties: false,
          properties: {
            commit: {
              additionalProperties: false,
              properties: {
                block_id: {
                  additionalProperties: false,
                  properties: {
                    hash: {
                      items: {
                        type: 'integer',
                      },
                      type: 'array',
                    },
                    parts: {
                      additionalProperties: false,
                      properties: {
                        hash: {
                          items: {
                            type: 'integer',
                          },
                          type: 'array',
                        },
                        total: {
                          type: 'integer',
                        },
                      },
                      type: 'object',
                    },
                  },
                  type: 'object',
                },
                height: {
                  type: 'integer',
                },
                round: {
                  type: 'integer',
                },
                signatures: {
                  items: {
                    additionalProperties: false,
                    properties: {
                      block_id_flag: {
                        type: 'integer',
                      },
                      signature: {
                        media: {
                          binaryEncoding: 'base64',
                        },
                        type: 'string',
                      },
                      timestamp: {
                        format: 'date-time',
                        type: 'string',
                      },
                      validator_address: {
                        items: {
                          type: 'integer',
                        },
                        type: 'array',
                      },
                    },
                    type: 'object',
                  },
                  type: 'array',
                },
              },
              type: 'object',
            },
            dah: {
              additionalProperties: false,
              properties: {
                column_roots: {
                  items: {
                    media: {
                      binaryEncoding: 'base64',
                    },
                    type: 'string',
                  },
                  type: 'array',
                },
                row_roots: {
                  items: {
                    media: {
                      binaryEncoding: 'base64',
                    },
                    type: 'string',
                  },
                  type: 'array',
                },
              },
              type: 'object',
            },
            header: {
              additionalProperties: false,
              properties: {
                app_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                chain_id: {
                  type: 'string',
                },
                consensus_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                data_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                evidence_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                height: {
                  type: 'integer',
                },
                last_block_id: {
                  additionalProperties: false,
                  properties: {
                    hash: {
                      items: {
                        type: 'integer',
                      },
                      type: 'array',
                    },
                    parts: {
                      additionalProperties: false,
                      properties: {
                        hash: {
                          items: {
                            type: 'integer',
                          },
                          type: 'array',
                        },
                        total: {
                          type: 'integer',
                        },
                      },
                      type: 'object',
                    },
                  },
                  type: 'object',
                },
                last_commit_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                last_results_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                next_validators_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                proposer_address: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                time: {
                  format: 'date-time',
                  type: 'string',
                },
                validators_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                version: {
                  additionalProperties: false,
                  properties: {
                    app: {
                      type: 'integer',
                    },
                    block: {
                      type: 'integer',
                    },
                  },
                  type: 'object',
                },
              },
              type: 'object',
            },
            validator_set: {
              additionalProperties: false,
              properties: {
                proposer: {
                  additionalProperties: false,
                  properties: {
                    address: {
                      items: {
                        type: 'integer',
                      },
                      type: 'array',
                    },
                    proposer_priority: {
                      type: 'integer',
                    },
                    pub_key: {
                      additionalProperties: true,
                    },
                    voting_power: {
                      type: 'integer',
                    },
                  },
                  type: 'object',
                },
                validators: {
                  items: {
                    additionalProperties: false,
                    properties: {
                      address: {
                        items: {
                          type: 'integer',
                        },
                        type: 'array',
                      },
                      proposer_priority: {
                        type: 'integer',
                      },
                      pub_key: {
                        additionalProperties: true,
                      },
                      voting_power: {
                        type: 'integer',
                      },
                    },
                    type: 'object',
                  },
                  type: 'array',
                },
              },
              type: 'object',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/header/header.go#L33',
      },
    },
    {
      name: 'header.Head',
      description: 'Auth level: public',
      summary: 'Head returns the ExtendedHeader of the chain head.\n',
      paramStructure: 'by-position',
      params: [],
      result: {
        name: '*header.ExtendedHeader',
        description: '*header.ExtendedHeader',
        summary: '',
        schema: {
          examples: [
            {
              validator_set: {
                validators: [
                  {
                    address: '57DC09D28388DBF977CFC30EF50BE8B644CCC1FA',
                    pub_key: {
                      type: 'tendermint/PubKeyEd25519',
                      value: 'aoB4xU9//HAqOP9ciyp0+PTdZxt/UGKgZOabU6JxW8o=',
                    },
                    voting_power: '5000000000',
                    proposer_priority: '0',
                  },
                ],
                proposer: {
                  address: '57DC09D28388DBF977CFC30EF50BE8B644CCC1FA',
                  pub_key: {
                    type: 'tendermint/PubKeyEd25519',
                    value: 'aoB4xU9//HAqOP9ciyp0+PTdZxt/UGKgZOabU6JxW8o=',
                  },
                  voting_power: '5000000000',
                  proposer_priority: '0',
                },
              },
              header: {
                version: {
                  block: 11,
                },
                chain_id: 'arabica-2',
                height: 42,
                time: '2022-11-15T17:04:04.364455555Z',
                last_block_id: {
                  hash: 'D35285797CB08451E8E85B97B0259A3C98E42BFCAEA5465152EE68DBD5760935',
                  parts: {
                    total: 1,
                    hash: 'EF5E90A836E5676B98177FB38B0C0BB7D957F71BBA6109B1D79C65344BC6C7FB',
                  },
                },
                last_commit_hash:
                  'DB5BB6A1518FD618D5B6607E9507E60E52BB9B532E5718D6D74F1F510FE5D10F',
                data_hash:
                  '6F52DAC16545E45725BE6EA32AED55266E45034800EEE1D87C9428F4844EA47A',
                validators_hash:
                  '883A0C92B8D976312B249C1397E73CF2981A9EB715717CBEE3800B8380C22C1D',
                next_validators_hash:
                  '883A0C92B8D976312B249C1397E73CF2981A9EB715717CBEE3800B8380C22C1D',
                consensus_hash:
                  '048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F',
                app_hash:
                  '9E52BD09B71043C25FBC7C8D928490E051811A10E978C66E3519A41352DD0699',
                last_results_hash:
                  'E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855',
                evidence_hash:
                  'E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855',
                proposer_address: '57DC09D28388DBF977CFC30EF50BE8B644CCC1FA',
              },
              commit: {
                height: 42,
                round: 0,
                block_id: {
                  hash: 'F22BAEF4D99A835D9F2CA92C58E8AA48C589284B7916FF073A1D778C73EA4CC1',
                  parts: {
                    total: 1,
                    hash: '9961CC7B6B9BE558D0FED40675232F4B37BEE75419C815240804C1A1801CF626',
                  },
                },
                signatures: [
                  {
                    block_id_flag: 2,
                    validator_address:
                      '57DC09D28388DBF977CFC30EF50BE8B644CCC1FA',
                    timestamp: '2022-11-15T17:04:29.384867372Z',
                    signature:
                      '0+INXvvzUExQToNpmQhhvFySbQYFqoYTpgFACP+3lkSWGh48ukkMMqj2UnnAzqQhabuKeXx/5f8hiwEzeMM6Dg==',
                  },
                ],
              },
              dah: {
                row_roots: [
                  '//////////7//////////rr7xfWEpBugDbgBYmKPvIOGpNDJUjrMyS17ZyAnUvK7',
                  '/////////////////////zEUYTRl2BUUeFrpCh4OmiYKeTgtgYfn/tCeVNNVTMv4',
                ],
                column_roots: [
                  '//////////7//////////rr7xfWEpBugDbgBYmKPvIOGpNDJUjrMyS17ZyAnUvK7',
                  '/////////////////////zEUYTRl2BUUeFrpCh4OmiYKeTgtgYfn/tCeVNNVTMv4',
                ],
              },
            },
          ],
          additionalProperties: false,
          properties: {
            commit: {
              additionalProperties: false,
              properties: {
                block_id: {
                  additionalProperties: false,
                  properties: {
                    hash: {
                      items: {
                        type: 'integer',
                      },
                      type: 'array',
                    },
                    parts: {
                      additionalProperties: false,
                      properties: {
                        hash: {
                          items: {
                            type: 'integer',
                          },
                          type: 'array',
                        },
                        total: {
                          type: 'integer',
                        },
                      },
                      type: 'object',
                    },
                  },
                  type: 'object',
                },
                height: {
                  type: 'integer',
                },
                round: {
                  type: 'integer',
                },
                signatures: {
                  items: {
                    additionalProperties: false,
                    properties: {
                      block_id_flag: {
                        type: 'integer',
                      },
                      signature: {
                        media: {
                          binaryEncoding: 'base64',
                        },
                        type: 'string',
                      },
                      timestamp: {
                        format: 'date-time',
                        type: 'string',
                      },
                      validator_address: {
                        items: {
                          type: 'integer',
                        },
                        type: 'array',
                      },
                    },
                    type: 'object',
                  },
                  type: 'array',
                },
              },
              type: 'object',
            },
            dah: {
              additionalProperties: false,
              properties: {
                column_roots: {
                  items: {
                    media: {
                      binaryEncoding: 'base64',
                    },
                    type: 'string',
                  },
                  type: 'array',
                },
                row_roots: {
                  items: {
                    media: {
                      binaryEncoding: 'base64',
                    },
                    type: 'string',
                  },
                  type: 'array',
                },
              },
              type: 'object',
            },
            header: {
              additionalProperties: false,
              properties: {
                app_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                chain_id: {
                  type: 'string',
                },
                consensus_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                data_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                evidence_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                height: {
                  type: 'integer',
                },
                last_block_id: {
                  additionalProperties: false,
                  properties: {
                    hash: {
                      items: {
                        type: 'integer',
                      },
                      type: 'array',
                    },
                    parts: {
                      additionalProperties: false,
                      properties: {
                        hash: {
                          items: {
                            type: 'integer',
                          },
                          type: 'array',
                        },
                        total: {
                          type: 'integer',
                        },
                      },
                      type: 'object',
                    },
                  },
                  type: 'object',
                },
                last_commit_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                last_results_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                next_validators_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                proposer_address: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                time: {
                  format: 'date-time',
                  type: 'string',
                },
                validators_hash: {
                  items: {
                    type: 'integer',
                  },
                  type: 'array',
                },
                version: {
                  additionalProperties: false,
                  properties: {
                    app: {
                      type: 'integer',
                    },
                    block: {
                      type: 'integer',
                    },
                  },
                  type: 'object',
                },
              },
              type: 'object',
            },
            validator_set: {
              additionalProperties: false,
              properties: {
                proposer: {
                  additionalProperties: false,
                  properties: {
                    address: {
                      items: {
                        type: 'integer',
                      },
                      type: 'array',
                    },
                    proposer_priority: {
                      type: 'integer',
                    },
                    pub_key: {
                      additionalProperties: true,
                    },
                    voting_power: {
                      type: 'integer',
                    },
                  },
                  type: 'object',
                },
                validators: {
                  items: {
                    additionalProperties: false,
                    properties: {
                      address: {
                        items: {
                          type: 'integer',
                        },
                        type: 'array',
                      },
                      proposer_priority: {
                        type: 'integer',
                      },
                      pub_key: {
                        additionalProperties: true,
                      },
                      voting_power: {
                        type: 'integer',
                      },
                    },
                    type: 'object',
                  },
                  type: 'array',
                },
              },
              type: 'object',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/header/header.go#L37',
      },
    },
    {
      name: 'header.IsSyncing',
      description: 'Auth level: public',
      summary: 'IsSyncing returns the status of sync\n',
      paramStructure: 'by-position',
      params: [],
      result: {
        name: 'bool',
        description: 'bool',
        summary: '',
        schema: {
          examples: [true],
          type: ['boolean'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/header/header.go#L41',
      },
    },
    {
      name: 'node.AuthNew',
      description: 'Auth level: admin',
      summary:
        'AuthNew signs and returns a new token with the given permissions.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'perms',
          description: '[]auth.Permission',
          summary: '',
          schema: {
            examples: [['admin']],
            items: [
              {
                type: ['string'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '[]byte',
        description: '[]byte',
        summary: '',
        schema: {
          examples: ['Ynl0ZSBhcnJheQ=='],
          type: ['string'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/node/node.go#L49',
      },
    },
    {
      name: 'node.AuthVerify',
      description: 'Auth level: admin',
      summary:
        'AuthVerify returns the permissions assigned to the given token.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'token',
          description: 'string',
          summary: '',
          schema: {
            examples: ['string value'],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '[]auth.Permission',
        description: '[]auth.Permission',
        summary: '',
        schema: {
          examples: [['admin']],
          items: [
            {
              type: ['string'],
            },
          ],
          type: ['array'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/node/node.go#L45',
      },
    },
    {
      name: 'node.Info',
      description: 'Auth level: admin',
      summary: 'Info returns administrative information about the node.\n',
      paramStructure: 'by-position',
      params: [],
      result: {
        name: 'Info',
        description: 'Info',
        summary: '',
        schema: {
          examples: [
            {
              type: 3,
              api_version: 'string value',
            },
          ],
          additionalProperties: false,
          properties: {
            api_version: {
              type: 'string',
            },
            type: {
              type: 'integer',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/node/node.go#L37',
      },
    },
    {
      name: 'node.LogLevelSet',
      description: 'Auth level: admin',
      summary:
        'LogLevelSet sets the given component log level to the given level.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'name',
          description: 'string',
          summary: '',
          schema: {
            examples: ['string value'],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'level',
          description: 'string',
          summary: '',
          schema: {
            examples: ['string value'],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'Null',
        description: 'Null',
        schema: {
          type: ['null'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/node/node.go#L41',
      },
    },
    {
      name: 'p2p.BandwidthForPeer',
      description: 'Auth level: admin',
      summary:
        'BandwidthForPeer returns a Stats struct with bandwidth metrics associated with the given peer.ID.\nThe metrics returned include all traffic sent / received for the peer, regardless of protocol.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'id',
          description: 'peer.ID',
          summary: '',
          schema: {
            examples: [
              'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
            ],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'metrics.Stats',
        description: 'metrics.Stats',
        summary: '',
        schema: {
          examples: [
            {
              TotalIn: 42,
              TotalOut: 42,
              RateIn: 42,
              RateOut: 42,
            },
          ],
          additionalProperties: false,
          properties: {
            RateIn: {
              type: 'number',
            },
            RateOut: {
              type: 'number',
            },
            TotalIn: {
              type: 'integer',
            },
            TotalOut: {
              type: 'integer',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L274',
      },
    },
    {
      name: 'p2p.BandwidthForProtocol',
      description: 'Auth level: admin',
      summary:
        'BandwidthForProtocol returns a Stats struct with bandwidth metrics associated with the given\nprotocol.ID.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'proto',
          description: 'protocol.ID',
          summary: '',
          schema: {
            examples: ['/celestia/mocha/ipfs/bitswap'],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'metrics.Stats',
        description: 'metrics.Stats',
        summary: '',
        schema: {
          examples: [
            {
              TotalIn: 42,
              TotalOut: 42,
              RateIn: 42,
              RateOut: 42,
            },
          ],
          additionalProperties: false,
          properties: {
            RateIn: {
              type: 'number',
            },
            RateOut: {
              type: 'number',
            },
            TotalIn: {
              type: 'integer',
            },
            TotalOut: {
              type: 'integer',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L278',
      },
    },
    {
      name: 'p2p.BandwidthStats',
      description: 'Auth level: admin',
      summary:
        'BandwidthStats returns a Stats struct with bandwidth metrics for all\ndata sent/received by the local peer, regardless of protocol or remote\npeer IDs.\n',
      paramStructure: 'by-position',
      params: [],
      result: {
        name: 'metrics.Stats',
        description: 'metrics.Stats',
        summary: '',
        schema: {
          examples: [
            {
              TotalIn: 42,
              TotalOut: 42,
              RateIn: 42,
              RateOut: 42,
            },
          ],
          additionalProperties: false,
          properties: {
            RateIn: {
              type: 'number',
            },
            RateOut: {
              type: 'number',
            },
            TotalIn: {
              type: 'integer',
            },
            TotalOut: {
              type: 'integer',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L270',
      },
    },
    {
      name: 'p2p.BlockPeer',
      description: 'Auth level: admin',
      summary: 'BlockPeer adds a peer to the set of blocked peers.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'p',
          description: 'peer.ID',
          summary: '',
          schema: {
            examples: [
              'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
            ],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'Null',
        description: 'Null',
        schema: {
          type: ['null'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L246',
      },
    },
    {
      name: 'p2p.ClosePeer',
      description: 'Auth level: admin',
      summary: 'ClosePeer closes the connection to a given peer.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'id',
          description: 'peer.ID',
          summary: '',
          schema: {
            examples: [
              'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
            ],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'Null',
        description: 'Null',
        schema: {
          type: ['null'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L234',
      },
    },
    {
      name: 'p2p.Connect',
      description: 'Auth level: admin',
      summary:
        'Connect ensures there is a connection between this host and the peer with\ngiven peer.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'pi',
          description: 'peer.AddrInfo',
          summary: '',
          schema: {
            examples: [
              {
                ID: 'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
                Addrs: ['/ip6/::1/udp/2121/quic-v1'],
              },
            ],
            additionalProperties: false,
            properties: {
              Addrs: {
                items: {
                  additionalProperties: true,
                },
                type: 'array',
              },
              ID: {
                type: 'string',
              },
            },
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'Null',
        description: 'Null',
        schema: {
          type: ['null'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L230',
      },
    },
    {
      name: 'p2p.Connectedness',
      description: 'Auth level: admin',
      summary:
        'Connectedness returns a state signaling connection capabilities.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'id',
          description: 'peer.ID',
          summary: '',
          schema: {
            examples: [
              'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
            ],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'network.Connectedness',
        description: 'network.Connectedness',
        summary: '',
        schema: {
          examples: [1],
          type: ['integer'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L238',
      },
    },
    {
      name: 'p2p.Info',
      description: 'Auth level: admin',
      summary: 'Info returns administrative information about the node.\n',
      paramStructure: 'by-position',
      params: [],
      result: {
        name: 'peer.AddrInfo',
        description: 'peer.AddrInfo',
        summary: '',
        schema: {
          examples: [
            {
              ID: 'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
              Addrs: ['/ip6/::1/udp/2121/quic-v1'],
            },
          ],
          additionalProperties: false,
          properties: {
            Addrs: {
              items: {
                additionalProperties: true,
              },
              type: 'array',
            },
            ID: {
              type: 'string',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L218',
      },
    },
    {
      name: 'p2p.IsProtected',
      description: 'Auth level: admin',
      summary: 'IsProtected returns whether the given peer is protected.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'id',
          description: 'peer.ID',
          summary: '',
          schema: {
            examples: [
              'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
            ],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'tag',
          description: 'string',
          summary: '',
          schema: {
            examples: ['string value'],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'bool',
        description: 'bool',
        summary: '',
        schema: {
          examples: [true],
          type: ['boolean'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L266',
      },
    },
    {
      name: 'p2p.ListBlockedPeers',
      description: 'Auth level: admin',
      summary: 'ListBlockedPeers returns a list of blocked peers.\n',
      paramStructure: 'by-position',
      params: [],
      result: {
        name: '[]peer.ID',
        description: '[]peer.ID',
        summary: '',
        schema: {
          examples: [
            [
              'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
            ],
          ],
          items: [
            {
              type: ['string'],
            },
          ],
          type: ['array'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L254',
      },
    },
    {
      name: 'p2p.NATStatus',
      description: 'Auth level: admin',
      summary: 'NATStatus returns the current NAT status.\n',
      paramStructure: 'by-position',
      params: [],
      result: {
        name: 'network.Reachability',
        description: 'network.Reachability',
        summary: '',
        schema: {
          examples: [2],
          type: ['integer'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L242',
      },
    },
    {
      name: 'p2p.PeerInfo',
      description: 'Auth level: admin',
      summary:
        'PeerInfo returns a small slice of information Peerstore has on the\ngiven peer.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'id',
          description: 'peer.ID',
          summary: '',
          schema: {
            examples: [
              'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
            ],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'peer.AddrInfo',
        description: 'peer.AddrInfo',
        summary: '',
        schema: {
          examples: [
            {
              ID: 'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
              Addrs: ['/ip6/::1/udp/2121/quic-v1'],
            },
          ],
          additionalProperties: false,
          properties: {
            Addrs: {
              items: {
                additionalProperties: true,
              },
              type: 'array',
            },
            ID: {
              type: 'string',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L226',
      },
    },
    {
      name: 'p2p.Peers',
      description: 'Auth level: admin',
      summary: 'Peers returns all peer IDs used across all inner stores.\n',
      paramStructure: 'by-position',
      params: [],
      result: {
        name: '[]peer.ID',
        description: '[]peer.ID',
        summary: '',
        schema: {
          examples: [
            [
              'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
            ],
          ],
          items: [
            {
              type: ['string'],
            },
          ],
          type: ['array'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L222',
      },
    },
    {
      name: 'p2p.Protect',
      description: 'Auth level: admin',
      summary:
        'Protect adds a peer to the list of peers who have a bidirectional\npeering agreement that they are protected from being trimmed, dropped\nor negatively scored.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'id',
          description: 'peer.ID',
          summary: '',
          schema: {
            examples: [
              'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
            ],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'tag',
          description: 'string',
          summary: '',
          schema: {
            examples: ['string value'],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'Null',
        description: 'Null',
        schema: {
          type: ['null'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L258',
      },
    },
    {
      name: 'p2p.PubSubPeers',
      description: 'Auth level: admin',
      summary:
        'PubSubPeers returns the peer IDs of the peers joined on\nthe given topic.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'topic',
          description: 'string',
          summary: '',
          schema: {
            examples: ['string value'],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '[]peer.ID',
        description: '[]peer.ID',
        summary: '',
        schema: {
          examples: [
            [
              'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
            ],
          ],
          items: [
            {
              type: ['string'],
            },
          ],
          type: ['array'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L286',
      },
    },
    {
      name: 'p2p.ResourceState',
      description: 'Auth level: admin',
      summary: 'ResourceState returns the state of the resource manager.\n',
      paramStructure: 'by-position',
      params: [],
      result: {
        name: 'rcmgr.ResourceManagerStat',
        description: 'rcmgr.ResourceManagerStat',
        summary: '',
        schema: {
          examples: [
            {
              System: {
                NumStreamsInbound: 4,
                NumStreamsOutbound: 13,
                NumConnsInbound: 0,
                NumConnsOutbound: 13,
                NumFD: 7,
                Memory: 4456448,
              },
              Transient: {
                NumStreamsInbound: 0,
                NumStreamsOutbound: 0,
                NumConnsInbound: 0,
                NumConnsOutbound: 0,
                NumFD: 0,
                Memory: 0,
              },
              Services: {
                'libp2p.autonat': {
                  NumStreamsInbound: 0,
                  NumStreamsOutbound: 0,
                  NumConnsInbound: 0,
                  NumConnsOutbound: 0,
                  NumFD: 0,
                  Memory: 0,
                },
                'libp2p.identify': {
                  NumStreamsInbound: 0,
                  NumStreamsOutbound: 0,
                  NumConnsInbound: 0,
                  NumConnsOutbound: 0,
                  NumFD: 0,
                  Memory: 0,
                },
              },
              Protocols: {
                '/celestia/arabica-3/ipfs/bitswap/1.2.0': {
                  NumStreamsInbound: 0,
                  NumStreamsOutbound: 4,
                  NumConnsInbound: 0,
                  NumConnsOutbound: 0,
                  NumFD: 0,
                  Memory: 0,
                },
                '/celestia/arabica-3/kad/1.0.0': {
                  NumStreamsInbound: 0,
                  NumStreamsOutbound: 4,
                  NumConnsInbound: 0,
                  NumConnsOutbound: 0,
                  NumFD: 0,
                  Memory: 0,
                },
                '/floodsub/1.0.0': {
                  NumStreamsInbound: 2,
                  NumStreamsOutbound: 0,
                  NumConnsInbound: 0,
                  NumConnsOutbound: 0,
                  NumFD: 0,
                  Memory: 0,
                },
                '/ipfs/id/1.0.0': {
                  NumStreamsInbound: 0,
                  NumStreamsOutbound: 1,
                  NumConnsInbound: 0,
                  NumConnsOutbound: 0,
                  NumFD: 0,
                  Memory: 0,
                },
                '/meshsub/1.1.0': {
                  NumStreamsInbound: 2,
                  NumStreamsOutbound: 4,
                  NumConnsInbound: 0,
                  NumConnsOutbound: 0,
                  NumFD: 0,
                  Memory: 0,
                },
              },
              Peers: {
                '\u0000$\u0008\u0001\u0012 \ufffd-\ufffd\ufffd\u0026\ufffd\ufffdY\ufffdk\ufffd\u000e\u0011\ufffdS\ufffdRM\u0013\ufffd\u0015\ufffd\ufffd$\ufffd\ufffd\ufffd\ufffd*\ufffd\u0002W':
                  {
                    NumStreamsInbound: 1,
                    NumStreamsOutbound: 3,
                    NumConnsInbound: 0,
                    NumConnsOutbound: 3,
                    NumFD: 3,
                    Memory: 1048576,
                  },
              },
            },
          ],
          additionalProperties: false,
          properties: {
            Peers: {
              patternProperties: {
                '.*': {
                  additionalProperties: false,
                  properties: {
                    Memory: {
                      type: 'integer',
                    },
                    NumConnsInbound: {
                      type: 'integer',
                    },
                    NumConnsOutbound: {
                      type: 'integer',
                    },
                    NumFD: {
                      type: 'integer',
                    },
                    NumStreamsInbound: {
                      type: 'integer',
                    },
                    NumStreamsOutbound: {
                      type: 'integer',
                    },
                  },
                  type: 'object',
                },
              },
              type: 'object',
            },
            Protocols: {
              patternProperties: {
                '.*': {
                  additionalProperties: false,
                  properties: {
                    Memory: {
                      type: 'integer',
                    },
                    NumConnsInbound: {
                      type: 'integer',
                    },
                    NumConnsOutbound: {
                      type: 'integer',
                    },
                    NumFD: {
                      type: 'integer',
                    },
                    NumStreamsInbound: {
                      type: 'integer',
                    },
                    NumStreamsOutbound: {
                      type: 'integer',
                    },
                  },
                  type: 'object',
                },
              },
              type: 'object',
            },
            Services: {
              patternProperties: {
                '.*': {
                  additionalProperties: false,
                  properties: {
                    Memory: {
                      type: 'integer',
                    },
                    NumConnsInbound: {
                      type: 'integer',
                    },
                    NumConnsOutbound: {
                      type: 'integer',
                    },
                    NumFD: {
                      type: 'integer',
                    },
                    NumStreamsInbound: {
                      type: 'integer',
                    },
                    NumStreamsOutbound: {
                      type: 'integer',
                    },
                  },
                  type: 'object',
                },
              },
              type: 'object',
            },
            System: {
              additionalProperties: false,
              properties: {
                Memory: {
                  type: 'integer',
                },
                NumConnsInbound: {
                  type: 'integer',
                },
                NumConnsOutbound: {
                  type: 'integer',
                },
                NumFD: {
                  type: 'integer',
                },
                NumStreamsInbound: {
                  type: 'integer',
                },
                NumStreamsOutbound: {
                  type: 'integer',
                },
              },
              type: 'object',
            },
            Transient: {
              additionalProperties: false,
              properties: {
                Memory: {
                  type: 'integer',
                },
                NumConnsInbound: {
                  type: 'integer',
                },
                NumConnsOutbound: {
                  type: 'integer',
                },
                NumFD: {
                  type: 'integer',
                },
                NumStreamsInbound: {
                  type: 'integer',
                },
                NumStreamsOutbound: {
                  type: 'integer',
                },
              },
              type: 'object',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L282',
      },
    },
    {
      name: 'p2p.UnblockPeer',
      description: 'Auth level: admin',
      summary: 'UnblockPeer removes a peer from the set of blocked peers.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'p',
          description: 'peer.ID',
          summary: '',
          schema: {
            examples: [
              'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
            ],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'Null',
        description: 'Null',
        schema: {
          type: ['null'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L250',
      },
    },
    {
      name: 'p2p.Unprotect',
      description: 'Auth level: admin',
      summary:
        'Unprotect removes a peer from the list of peers who have a bidirectional\npeering agreement that they are protected from being trimmed, dropped\nor negatively scored, returning a bool representing whether the given\npeer is protected or not.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'id',
          description: 'peer.ID',
          summary: '',
          schema: {
            examples: [
              'CovLVG4fQcqUS6DmoMxAwVJGNW6PMzfwTG6BHW9NH9TLGHcbRfvPVc3JVhnufK3HTzStoTo',
            ],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'tag',
          description: 'string',
          summary: '',
          schema: {
            examples: ['string value'],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'bool',
        description: 'bool',
        summary: '',
        schema: {
          examples: [true],
          type: ['boolean'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/p2p/p2p.go#L262',
      },
    },
    {
      name: 'share.GetEDS',
      description: 'Auth level: public',
      summary: 'GetEDS gets the full EDS identified by the given root.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'root',
          description: '*share.Root',
          summary: '',
          schema: {
            examples: [
              {
                row_roots: ['Ynl0ZSBhcnJheQ=='],
                column_roots: ['Ynl0ZSBhcnJheQ=='],
              },
            ],
            additionalProperties: false,
            properties: {
              column_roots: {
                items: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
                type: 'array',
              },
              row_roots: {
                items: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
                type: 'array',
              },
            },
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*rsmt2d.ExtendedDataSquare',
        description: '*rsmt2d.ExtendedDataSquare',
        summary: '',
        schema: {
          examples: [
            {
              data_square: [
                '//////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
                '//////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
                '//////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
                '//////////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
              ],
              codec: 'Leopard',
            },
          ],
          additionalProperties: false,
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/share/share.go#L81',
      },
    },
    {
      name: 'share.GetShare',
      description: 'Auth level: public',
      summary: 'GetShare gets a Share by coordinates in EDS.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'dah',
          description: '*share.Root',
          summary: '',
          schema: {
            examples: [
              {
                row_roots: ['Ynl0ZSBhcnJheQ=='],
                column_roots: ['Ynl0ZSBhcnJheQ=='],
              },
            ],
            additionalProperties: false,
            properties: {
              column_roots: {
                items: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
                type: 'array',
              },
              row_roots: {
                items: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
                type: 'array',
              },
            },
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'row',
          description: 'int',
          summary: '',
          schema: {
            examples: [42],
            type: ['integer'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'col',
          description: 'int',
          summary: '',
          schema: {
            examples: [42],
            type: ['integer'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'share.Share',
        description: 'share.Share',
        summary: '',
        schema: {
          examples: ['Ynl0ZSBhcnJheQ=='],
          type: ['string'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/share/share.go#L77',
      },
    },
    {
      name: 'share.GetSharesByNamespace',
      description: 'Auth level: public',
      summary:
        'GetSharesByNamespace gets all shares from an EDS within the given namespace.\nShares are returned in a row-by-row order if the namespace spans multiple rows.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'root',
          description: '*share.Root',
          summary: '',
          schema: {
            examples: [
              {
                row_roots: ['Ynl0ZSBhcnJheQ=='],
                column_roots: ['Ynl0ZSBhcnJheQ=='],
              },
            ],
            additionalProperties: false,
            properties: {
              column_roots: {
                items: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
                type: 'array',
              },
              row_roots: {
                items: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
                type: 'array',
              },
            },
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'namespace',
          description: 'namespace.ID',
          summary: '',
          schema: {
            examples: ['Bw=='],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'share.NamespacedShares',
        description: 'share.NamespacedShares',
        summary: '',
        schema: {
          examples: [
            [
              {
                Shares: ['Ynl0ZSBhcnJheQ=='],
                Proof: {
                  Nodes: [null],
                  Start: 42,
                  End: 42,
                },
              },
            ],
          ],
          items: [
            {
              additionalProperties: false,
              properties: {
                Proof: {
                  additionalProperties: false,
                  properties: {
                    End: {
                      type: 'integer',
                    },
                    Nodes: {
                      items: {
                        additionalProperties: false,
                        type: 'object',
                      },
                      type: 'array',
                    },
                    Start: {
                      type: 'integer',
                    },
                  },
                  type: 'object',
                },
                Shares: {
                  items: {
                    media: {
                      binaryEncoding: 'base64',
                    },
                    type: 'string',
                  },
                  type: 'array',
                },
              },
              type: ['object'],
            },
          ],
          type: ['array'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/share/share.go#L85',
      },
    },
    {
      name: 'share.ProbabilityOfAvailability',
      description: 'Auth level: public',
      summary:
        'ProbabilityOfAvailability calculates the probability of the data square\nbeing available based on the number of samples collected.\n',
      paramStructure: 'by-position',
      params: [],
      result: {
        name: 'float64',
        description: 'float64',
        summary: '',
        schema: {
          examples: [42],
          type: ['number'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/share/share.go#L73',
      },
    },
    {
      name: 'share.SharesAvailable',
      description: 'Auth level: public',
      summary:
        'SharesAvailable subjectively validates if Shares committed to the given Root are available on\nthe Network.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'root',
          description: '*share.Root',
          summary: '',
          schema: {
            examples: [
              {
                row_roots: ['Ynl0ZSBhcnJheQ=='],
                column_roots: ['Ynl0ZSBhcnJheQ=='],
              },
            ],
            additionalProperties: false,
            properties: {
              column_roots: {
                items: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
                type: 'array',
              },
              row_roots: {
                items: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
                type: 'array',
              },
            },
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: 'Null',
        description: 'Null',
        schema: {
          type: ['null'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/share/share.go#L69',
      },
    },
    {
      name: 'state.AccountAddress',
      description: 'Auth level: read',
      summary:
        "AccountAddress retrieves the address of the node's account/signer\n",
      paramStructure: 'by-position',
      params: [],
      result: {
        name: 'state.Address',
        description: 'state.Address',
        summary: '',
        schema: {
          examples: ['celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h'],
          additionalProperties: true,
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L167',
      },
    },
    {
      name: 'state.Balance',
      description: 'Auth level: read',
      summary:
        "Balance retrieves the Celestia coin balance for the node's account/signer\nand verifies it against the corresponding block's AppHash.\n",
      paramStructure: 'by-position',
      params: [],
      result: {
        name: '*state.Balance',
        description: '*state.Balance',
        summary: '',
        schema: {
          examples: [
            {
              denom: 'string value',
              amount: '42',
            },
          ],
          additionalProperties: false,
          properties: {
            amount: {
              additionalProperties: false,
              type: 'object',
            },
            denom: {
              type: 'string',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L262',
      },
    },
    {
      name: 'state.BalanceForAddress',
      description: 'Auth level: public',
      summary:
        "BalanceForAddress retrieves the Celestia coin balance for the given address and verifies\nthe returned balance against the corresponding block's AppHash.\n\nNOTE: the balance returned is the balance reported by the block right before\nthe node's current head (head-1). This is due to the fact that for block N, the block's\n`AppHash` is the result of applying the previous block's transaction list.\n",
      paramStructure: 'by-position',
      params: [
        {
          name: 'addr',
          description: 'state.Address',
          summary: '',
          schema: {
            examples: ['celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h'],
            additionalProperties: true,
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*state.Balance',
        description: '*state.Balance',
        summary: '',
        schema: {
          examples: [
            {
              denom: 'string value',
              amount: '42',
            },
          ],
          additionalProperties: false,
          properties: {
            amount: {
              additionalProperties: false,
              type: 'object',
            },
            denom: {
              type: 'string',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L175',
      },
    },
    {
      name: 'state.BeginRedelegate',
      description: 'Auth level: write',
      summary:
        "BeginRedelegate sends a user's delegated tokens to a new validator for redelegation.\n",
      paramStructure: 'by-position',
      params: [
        {
          name: 'srcValAddr',
          description: 'state.ValAddress',
          summary: '',
          schema: {
            examples: [
              'celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p',
            ],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'dstValAddr',
          description: 'state.ValAddress',
          summary: '',
          schema: {
            examples: [
              'celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p',
            ],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'amount',
          description: 'state.Int',
          summary: '',
          schema: {
            examples: ['42'],
            additionalProperties: false,
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'fee',
          description: 'state.Int',
          summary: '',
          schema: {
            examples: ['42'],
            additionalProperties: false,
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'gasLim',
          description: 'uint64',
          summary: '',
          schema: {
            examples: [42],
            type: ['integer'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*state.TxResponse',
        description: '*state.TxResponse',
        summary: '',
        schema: {
          examples: [
            {
              height: 30497,
              txhash:
                '05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282',
              data: '12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365',
              raw_log:
                '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"amount","value":"30utia"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"module","value":"bank"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]}]}]',
              logs: [
                {
                  msg_index: 0,
                  events: [
                    {
                      type: 'coin_received',
                      attributes: [
                        {
                          key: 'receiver',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'coin_spent',
                      attributes: [
                        {
                          key: 'spender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'message',
                      attributes: [
                        {
                          key: 'action',
                          value: '/cosmos.bank.v1beta1.MsgSend',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'module',
                          value: 'bank',
                        },
                      ],
                    },
                    {
                      type: 'transfer',
                      attributes: [
                        {
                          key: 'recipient',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                  ],
                },
              ],
              gas_wanted: 10000000,
              gas_used: 69085,
              events: [
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'ZmVl',
                      value: null,
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'YWNjX3NlcQ==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'c2lnbmF0dXJl',
                      value:
                        'R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'YWN0aW9u',
                      value: 'L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_spent',
                  attributes: [
                    {
                      key: 'c3BlbmRlcg==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_received',
                  attributes: [
                    {
                      key: 'cmVjZWl2ZXI=',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'transfer',
                  attributes: [
                    {
                      key: 'cmVjaXBpZW50',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'bW9kdWxl',
                      value: 'YmFuaw==',
                      index: true,
                    },
                  ],
                },
              ],
            },
          ],
          additionalProperties: false,
          properties: {
            code: {
              type: 'integer',
            },
            codespace: {
              type: 'string',
            },
            data: {
              type: 'string',
            },
            events: {
              items: {
                additionalProperties: false,
                properties: {
                  attributes: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        index: {
                          type: 'boolean',
                        },
                        key: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                        value: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  type: {
                    type: 'string',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            gas_used: {
              type: 'integer',
            },
            gas_wanted: {
              type: 'integer',
            },
            height: {
              type: 'integer',
            },
            info: {
              type: 'string',
            },
            logs: {
              items: {
                additionalProperties: false,
                properties: {
                  events: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        attributes: {
                          items: {
                            additionalProperties: false,
                            properties: {
                              key: {
                                type: 'string',
                              },
                              value: {
                                type: 'string',
                              },
                            },
                            type: 'object',
                          },
                          type: 'array',
                        },
                        type: {
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  log: {
                    type: 'string',
                  },
                  msg_index: {
                    type: 'integer',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            raw_log: {
              type: 'string',
            },
            timestamp: {
              type: 'string',
            },
            tx: {
              additionalProperties: false,
              properties: {
                type_url: {
                  type: 'string',
                },
                value: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
              },
              type: 'object',
            },
            txhash: {
              type: 'string',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L214',
      },
    },
    {
      name: 'state.CancelUnbondingDelegation',
      description: 'Auth level: write',
      summary:
        "CancelUnbondingDelegation cancels a user's pending undelegation from a validator.\n",
      paramStructure: 'by-position',
      params: [
        {
          name: 'valAddr',
          description: 'state.ValAddress',
          summary: '',
          schema: {
            examples: [
              'celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p',
            ],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'amount',
          description: 'state.Int',
          summary: '',
          schema: {
            examples: ['42'],
            additionalProperties: false,
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'height',
          description: 'state.Int',
          summary: '',
          schema: {
            examples: ['42'],
            additionalProperties: false,
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'fee',
          description: 'state.Int',
          summary: '',
          schema: {
            examples: ['42'],
            additionalProperties: false,
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'gasLim',
          description: 'uint64',
          summary: '',
          schema: {
            examples: [42],
            type: ['integer'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*state.TxResponse',
        description: '*state.TxResponse',
        summary: '',
        schema: {
          examples: [
            {
              height: 30497,
              txhash:
                '05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282',
              data: '12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365',
              raw_log:
                '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"amount","value":"30utia"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"module","value":"bank"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]}]}]',
              logs: [
                {
                  msg_index: 0,
                  events: [
                    {
                      type: 'coin_received',
                      attributes: [
                        {
                          key: 'receiver',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'coin_spent',
                      attributes: [
                        {
                          key: 'spender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'message',
                      attributes: [
                        {
                          key: 'action',
                          value: '/cosmos.bank.v1beta1.MsgSend',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'module',
                          value: 'bank',
                        },
                      ],
                    },
                    {
                      type: 'transfer',
                      attributes: [
                        {
                          key: 'recipient',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                  ],
                },
              ],
              gas_wanted: 10000000,
              gas_used: 69085,
              events: [
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'ZmVl',
                      value: null,
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'YWNjX3NlcQ==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'c2lnbmF0dXJl',
                      value:
                        'R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'YWN0aW9u',
                      value: 'L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_spent',
                  attributes: [
                    {
                      key: 'c3BlbmRlcg==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_received',
                  attributes: [
                    {
                      key: 'cmVjZWl2ZXI=',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'transfer',
                  attributes: [
                    {
                      key: 'cmVjaXBpZW50',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'bW9kdWxl',
                      value: 'YmFuaw==',
                      index: true,
                    },
                  ],
                },
              ],
            },
          ],
          additionalProperties: false,
          properties: {
            code: {
              type: 'integer',
            },
            codespace: {
              type: 'string',
            },
            data: {
              type: 'string',
            },
            events: {
              items: {
                additionalProperties: false,
                properties: {
                  attributes: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        index: {
                          type: 'boolean',
                        },
                        key: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                        value: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  type: {
                    type: 'string',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            gas_used: {
              type: 'integer',
            },
            gas_wanted: {
              type: 'integer',
            },
            height: {
              type: 'integer',
            },
            info: {
              type: 'string',
            },
            logs: {
              items: {
                additionalProperties: false,
                properties: {
                  events: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        attributes: {
                          items: {
                            additionalProperties: false,
                            properties: {
                              key: {
                                type: 'string',
                              },
                              value: {
                                type: 'string',
                              },
                            },
                            type: 'object',
                          },
                          type: 'array',
                        },
                        type: {
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  log: {
                    type: 'string',
                  },
                  msg_index: {
                    type: 'integer',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            raw_log: {
              type: 'string',
            },
            timestamp: {
              type: 'string',
            },
            tx: {
              additionalProperties: false,
              properties: {
                type_url: {
                  type: 'string',
                },
                value: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
              },
              type: 'object',
            },
            txhash: {
              type: 'string',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L203',
      },
    },
    {
      name: 'state.Delegate',
      description: 'Auth level: write',
      summary:
        "Delegate sends a user's liquid tokens to a validator for delegation.\n",
      paramStructure: 'by-position',
      params: [
        {
          name: 'delAddr',
          description: 'state.ValAddress',
          summary: '',
          schema: {
            examples: [
              'celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p',
            ],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'amount',
          description: 'state.Int',
          summary: '',
          schema: {
            examples: ['42'],
            additionalProperties: false,
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'fee',
          description: 'state.Int',
          summary: '',
          schema: {
            examples: ['42'],
            additionalProperties: false,
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'gasLim',
          description: 'uint64',
          summary: '',
          schema: {
            examples: [42],
            type: ['integer'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*state.TxResponse',
        description: '*state.TxResponse',
        summary: '',
        schema: {
          examples: [
            {
              height: 30497,
              txhash:
                '05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282',
              data: '12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365',
              raw_log:
                '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"amount","value":"30utia"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"module","value":"bank"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]}]}]',
              logs: [
                {
                  msg_index: 0,
                  events: [
                    {
                      type: 'coin_received',
                      attributes: [
                        {
                          key: 'receiver',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'coin_spent',
                      attributes: [
                        {
                          key: 'spender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'message',
                      attributes: [
                        {
                          key: 'action',
                          value: '/cosmos.bank.v1beta1.MsgSend',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'module',
                          value: 'bank',
                        },
                      ],
                    },
                    {
                      type: 'transfer',
                      attributes: [
                        {
                          key: 'recipient',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                  ],
                },
              ],
              gas_wanted: 10000000,
              gas_used: 69085,
              events: [
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'ZmVl',
                      value: null,
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'YWNjX3NlcQ==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'c2lnbmF0dXJl',
                      value:
                        'R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'YWN0aW9u',
                      value: 'L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_spent',
                  attributes: [
                    {
                      key: 'c3BlbmRlcg==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_received',
                  attributes: [
                    {
                      key: 'cmVjZWl2ZXI=',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'transfer',
                  attributes: [
                    {
                      key: 'cmVjaXBpZW50',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'bW9kdWxl',
                      value: 'YmFuaw==',
                      index: true,
                    },
                  ],
                },
              ],
            },
          ],
          additionalProperties: false,
          properties: {
            code: {
              type: 'integer',
            },
            codespace: {
              type: 'string',
            },
            data: {
              type: 'string',
            },
            events: {
              items: {
                additionalProperties: false,
                properties: {
                  attributes: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        index: {
                          type: 'boolean',
                        },
                        key: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                        value: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  type: {
                    type: 'string',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            gas_used: {
              type: 'integer',
            },
            gas_wanted: {
              type: 'integer',
            },
            height: {
              type: 'integer',
            },
            info: {
              type: 'string',
            },
            logs: {
              items: {
                additionalProperties: false,
                properties: {
                  events: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        attributes: {
                          items: {
                            additionalProperties: false,
                            properties: {
                              key: {
                                type: 'string',
                              },
                              value: {
                                type: 'string',
                              },
                            },
                            type: 'object',
                          },
                          type: 'array',
                        },
                        type: {
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  log: {
                    type: 'string',
                  },
                  msg_index: {
                    type: 'integer',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            raw_log: {
              type: 'string',
            },
            timestamp: {
              type: 'string',
            },
            tx: {
              additionalProperties: false,
              properties: {
                type_url: {
                  type: 'string',
                },
                value: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
              },
              type: 'object',
            },
            txhash: {
              type: 'string',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L234',
      },
    },
    {
      name: 'state.IsStopped',
      description: 'Auth level: public',
      summary: "IsStopped checks if the Module's context has been stopped\n",
      paramStructure: 'by-position',
      params: [],
      result: {
        name: 'bool',
        description: 'bool',
        summary: '',
        schema: {
          examples: [true],
          type: ['boolean'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L171',
      },
    },
    {
      name: 'state.QueryDelegation',
      description: 'Auth level: public',
      summary:
        'QueryDelegation retrieves the delegation information between a delegator and a validator.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'valAddr',
          description: 'state.ValAddress',
          summary: '',
          schema: {
            examples: [
              'celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p',
            ],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*types.QueryDelegationResponse',
        description: '*types.QueryDelegationResponse',
        summary: '',
        schema: {
          examples: [
            {
              delegation_response: {
                delegation: {
                  delegator_address: 'string value',
                  validator_address: 'string value',
                  shares: '0',
                },
                balance: {
                  denom: 'string value',
                  amount: '42',
                },
              },
            },
          ],
          additionalProperties: false,
          properties: {
            delegation_response: {
              additionalProperties: false,
              properties: {
                balance: {
                  additionalProperties: false,
                  properties: {
                    amount: {
                      additionalProperties: false,
                      type: 'object',
                    },
                    denom: {
                      type: 'string',
                    },
                  },
                  type: 'object',
                },
                delegation: {
                  additionalProperties: false,
                  properties: {
                    delegator_address: {
                      type: 'string',
                    },
                    shares: {
                      additionalProperties: false,
                      type: 'object',
                    },
                    validator_address: {
                      type: 'string',
                    },
                  },
                  type: 'object',
                },
              },
              type: 'object',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L244',
      },
    },
    {
      name: 'state.QueryRedelegations',
      description: 'Auth level: public',
      summary:
        'QueryRedelegations retrieves the status of the redelegations between a delegator and a validator.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'srcValAddr',
          description: 'state.ValAddress',
          summary: '',
          schema: {
            examples: [
              'celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p',
            ],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'dstValAddr',
          description: 'state.ValAddress',
          summary: '',
          schema: {
            examples: [
              'celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p',
            ],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*types.QueryRedelegationsResponse',
        description: '*types.QueryRedelegationsResponse',
        summary: '',
        schema: {
          examples: [
            {
              redelegation_responses: [
                {
                  redelegation: {
                    delegator_address: 'string value',
                    validator_src_address: 'string value',
                    validator_dst_address: 'string value',
                    entries: [
                      {
                        creation_height: 42,
                        completion_time: '0001-01-01T00:00:00Z',
                        initial_balance: '42',
                        shares_dst: '0',
                      },
                    ],
                  },
                  entries: [
                    {
                      redelegation_entry: {
                        creation_height: 42,
                        completion_time: '0001-01-01T00:00:00Z',
                        initial_balance: '42',
                        shares_dst: '0',
                      },
                      balance: '42',
                    },
                  ],
                },
              ],
              pagination: {
                next_key: 'Ynl0ZSBhcnJheQ==',
                total: 42,
              },
            },
          ],
          additionalProperties: false,
          properties: {
            pagination: {
              additionalProperties: false,
              properties: {
                next_key: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
                total: {
                  type: 'integer',
                },
              },
              type: 'object',
            },
            redelegation_responses: {
              items: {
                additionalProperties: false,
                properties: {
                  entries: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        balance: {
                          additionalProperties: false,
                          type: 'object',
                        },
                        redelegation_entry: {
                          additionalProperties: false,
                          properties: {
                            completion_time: {
                              format: 'date-time',
                              type: 'string',
                            },
                            creation_height: {
                              type: 'integer',
                            },
                            initial_balance: {
                              additionalProperties: false,
                              type: 'object',
                            },
                            shares_dst: {
                              additionalProperties: false,
                              type: 'object',
                            },
                          },
                          type: 'object',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  redelegation: {
                    additionalProperties: false,
                    properties: {
                      delegator_address: {
                        type: 'string',
                      },
                      entries: {
                        items: {
                          additionalProperties: false,
                          properties: {
                            completion_time: {
                              format: 'date-time',
                              type: 'string',
                            },
                            creation_height: {
                              type: 'integer',
                            },
                            initial_balance: {
                              additionalProperties: false,
                              type: 'object',
                            },
                            shares_dst: {
                              additionalProperties: false,
                              type: 'object',
                            },
                          },
                          type: 'object',
                        },
                        type: 'array',
                      },
                      validator_dst_address: {
                        type: 'string',
                      },
                      validator_src_address: {
                        type: 'string',
                      },
                    },
                    type: 'object',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L255',
      },
    },
    {
      name: 'state.QueryUnbonding',
      description: 'Auth level: public',
      summary:
        'QueryUnbonding retrieves the unbonding status between a delegator and a validator.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'valAddr',
          description: 'state.ValAddress',
          summary: '',
          schema: {
            examples: [
              'celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p',
            ],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*types.QueryUnbondingDelegationResponse',
        description: '*types.QueryUnbondingDelegationResponse',
        summary: '',
        schema: {
          examples: [
            {
              unbond: {
                delegator_address: 'string value',
                validator_address: 'string value',
                entries: [
                  {
                    creation_height: 42,
                    completion_time: '0001-01-01T00:00:00Z',
                    initial_balance: '42',
                    balance: '42',
                  },
                ],
              },
            },
          ],
          additionalProperties: false,
          properties: {
            unbond: {
              additionalProperties: false,
              properties: {
                delegator_address: {
                  type: 'string',
                },
                entries: {
                  items: {
                    additionalProperties: false,
                    properties: {
                      balance: {
                        additionalProperties: false,
                        type: 'object',
                      },
                      completion_time: {
                        format: 'date-time',
                        type: 'string',
                      },
                      creation_height: {
                        type: 'integer',
                      },
                      initial_balance: {
                        additionalProperties: false,
                        type: 'object',
                      },
                    },
                    type: 'object',
                  },
                  type: 'array',
                },
                validator_address: {
                  type: 'string',
                },
              },
              type: 'object',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L248',
      },
    },
    {
      name: 'state.SubmitPayForBlob',
      description: 'Auth level: write',
      summary:
        'SubmitPayForBlob builds, signs and submits a PayForBlob transaction.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'nID',
          description: 'namespace.ID',
          summary: '',
          schema: {
            examples: ['Bw=='],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'data',
          description: '[]byte',
          summary: '',
          schema: {
            examples: ['Ynl0ZSBhcnJheQ=='],
            type: ['string'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'fee',
          description: 'state.Int',
          summary: '',
          schema: {
            examples: ['42'],
            additionalProperties: false,
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'gasLim',
          description: 'uint64',
          summary: '',
          schema: {
            examples: [42],
            type: ['integer'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*state.TxResponse',
        description: '*state.TxResponse',
        summary: '',
        schema: {
          examples: [
            {
              height: 30497,
              txhash:
                '05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282',
              data: '12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365',
              raw_log:
                '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"amount","value":"30utia"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"module","value":"bank"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]}]}]',
              logs: [
                {
                  msg_index: 0,
                  events: [
                    {
                      type: 'coin_received',
                      attributes: [
                        {
                          key: 'receiver',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'coin_spent',
                      attributes: [
                        {
                          key: 'spender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'message',
                      attributes: [
                        {
                          key: 'action',
                          value: '/cosmos.bank.v1beta1.MsgSend',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'module',
                          value: 'bank',
                        },
                      ],
                    },
                    {
                      type: 'transfer',
                      attributes: [
                        {
                          key: 'recipient',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                  ],
                },
              ],
              gas_wanted: 10000000,
              gas_used: 69085,
              events: [
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'ZmVl',
                      value: null,
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'YWNjX3NlcQ==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'c2lnbmF0dXJl',
                      value:
                        'R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'YWN0aW9u',
                      value: 'L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_spent',
                  attributes: [
                    {
                      key: 'c3BlbmRlcg==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_received',
                  attributes: [
                    {
                      key: 'cmVjZWl2ZXI=',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'transfer',
                  attributes: [
                    {
                      key: 'cmVjaXBpZW50',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'bW9kdWxl',
                      value: 'YmFuaw==',
                      index: true,
                    },
                  ],
                },
              ],
            },
          ],
          additionalProperties: false,
          properties: {
            code: {
              type: 'integer',
            },
            codespace: {
              type: 'string',
            },
            data: {
              type: 'string',
            },
            events: {
              items: {
                additionalProperties: false,
                properties: {
                  attributes: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        index: {
                          type: 'boolean',
                        },
                        key: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                        value: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  type: {
                    type: 'string',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            gas_used: {
              type: 'integer',
            },
            gas_wanted: {
              type: 'integer',
            },
            height: {
              type: 'integer',
            },
            info: {
              type: 'string',
            },
            logs: {
              items: {
                additionalProperties: false,
                properties: {
                  events: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        attributes: {
                          items: {
                            additionalProperties: false,
                            properties: {
                              key: {
                                type: 'string',
                              },
                              value: {
                                type: 'string',
                              },
                            },
                            type: 'object',
                          },
                          type: 'array',
                        },
                        type: {
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  log: {
                    type: 'string',
                  },
                  msg_index: {
                    type: 'integer',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            raw_log: {
              type: 'string',
            },
            timestamp: {
              type: 'string',
            },
            tx: {
              additionalProperties: false,
              properties: {
                type_url: {
                  type: 'string',
                },
                value: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
              },
              type: 'object',
            },
            txhash: {
              type: 'string',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L193',
      },
    },
    {
      name: 'state.SubmitTx',
      description: 'Auth level: write',
      summary:
        'SubmitTx submits the given transaction/message to the\nCelestia network and blocks until the tx is included in\na block.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'tx',
          description: 'state.Tx',
          summary: '',
          schema: {
            examples: ['Bw=='],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*state.TxResponse',
        description: '*state.TxResponse',
        summary: '',
        schema: {
          examples: [
            {
              height: 30497,
              txhash:
                '05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282',
              data: '12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365',
              raw_log:
                '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"amount","value":"30utia"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"module","value":"bank"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]}]}]',
              logs: [
                {
                  msg_index: 0,
                  events: [
                    {
                      type: 'coin_received',
                      attributes: [
                        {
                          key: 'receiver',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'coin_spent',
                      attributes: [
                        {
                          key: 'spender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'message',
                      attributes: [
                        {
                          key: 'action',
                          value: '/cosmos.bank.v1beta1.MsgSend',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'module',
                          value: 'bank',
                        },
                      ],
                    },
                    {
                      type: 'transfer',
                      attributes: [
                        {
                          key: 'recipient',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                  ],
                },
              ],
              gas_wanted: 10000000,
              gas_used: 69085,
              events: [
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'ZmVl',
                      value: null,
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'YWNjX3NlcQ==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'c2lnbmF0dXJl',
                      value:
                        'R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'YWN0aW9u',
                      value: 'L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_spent',
                  attributes: [
                    {
                      key: 'c3BlbmRlcg==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_received',
                  attributes: [
                    {
                      key: 'cmVjZWl2ZXI=',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'transfer',
                  attributes: [
                    {
                      key: 'cmVjaXBpZW50',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'bW9kdWxl',
                      value: 'YmFuaw==',
                      index: true,
                    },
                  ],
                },
              ],
            },
          ],
          additionalProperties: false,
          properties: {
            code: {
              type: 'integer',
            },
            codespace: {
              type: 'string',
            },
            data: {
              type: 'string',
            },
            events: {
              items: {
                additionalProperties: false,
                properties: {
                  attributes: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        index: {
                          type: 'boolean',
                        },
                        key: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                        value: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  type: {
                    type: 'string',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            gas_used: {
              type: 'integer',
            },
            gas_wanted: {
              type: 'integer',
            },
            height: {
              type: 'integer',
            },
            info: {
              type: 'string',
            },
            logs: {
              items: {
                additionalProperties: false,
                properties: {
                  events: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        attributes: {
                          items: {
                            additionalProperties: false,
                            properties: {
                              key: {
                                type: 'string',
                              },
                              value: {
                                type: 'string',
                              },
                            },
                            type: 'object',
                          },
                          type: 'array',
                        },
                        type: {
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  log: {
                    type: 'string',
                  },
                  msg_index: {
                    type: 'integer',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            raw_log: {
              type: 'string',
            },
            timestamp: {
              type: 'string',
            },
            tx: {
              additionalProperties: false,
              properties: {
                type_url: {
                  type: 'string',
                },
                value: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
              },
              type: 'object',
            },
            txhash: {
              type: 'string',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L189',
      },
    },
    {
      name: 'state.Transfer',
      description: 'Auth level: write',
      summary:
        'Transfer sends the given amount of coins from default wallet of the node to the given account\naddress.\n',
      paramStructure: 'by-position',
      params: [
        {
          name: 'to',
          description: 'state.AccAddress',
          summary: '',
          schema: {
            examples: ['celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h'],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'amount',
          description: 'state.Int',
          summary: '',
          schema: {
            examples: ['42'],
            additionalProperties: false,
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'fee',
          description: 'state.Int',
          summary: '',
          schema: {
            examples: ['42'],
            additionalProperties: false,
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'gasLimit',
          description: 'uint64',
          summary: '',
          schema: {
            examples: [42],
            type: ['integer'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*state.TxResponse',
        description: '*state.TxResponse',
        summary: '',
        schema: {
          examples: [
            {
              height: 30497,
              txhash:
                '05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282',
              data: '12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365',
              raw_log:
                '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"amount","value":"30utia"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"module","value":"bank"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]}]}]',
              logs: [
                {
                  msg_index: 0,
                  events: [
                    {
                      type: 'coin_received',
                      attributes: [
                        {
                          key: 'receiver',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'coin_spent',
                      attributes: [
                        {
                          key: 'spender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'message',
                      attributes: [
                        {
                          key: 'action',
                          value: '/cosmos.bank.v1beta1.MsgSend',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'module',
                          value: 'bank',
                        },
                      ],
                    },
                    {
                      type: 'transfer',
                      attributes: [
                        {
                          key: 'recipient',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                  ],
                },
              ],
              gas_wanted: 10000000,
              gas_used: 69085,
              events: [
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'ZmVl',
                      value: null,
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'YWNjX3NlcQ==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'c2lnbmF0dXJl',
                      value:
                        'R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'YWN0aW9u',
                      value: 'L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_spent',
                  attributes: [
                    {
                      key: 'c3BlbmRlcg==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_received',
                  attributes: [
                    {
                      key: 'cmVjZWl2ZXI=',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'transfer',
                  attributes: [
                    {
                      key: 'cmVjaXBpZW50',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'bW9kdWxl',
                      value: 'YmFuaw==',
                      index: true,
                    },
                  ],
                },
              ],
            },
          ],
          additionalProperties: false,
          properties: {
            code: {
              type: 'integer',
            },
            codespace: {
              type: 'string',
            },
            data: {
              type: 'string',
            },
            events: {
              items: {
                additionalProperties: false,
                properties: {
                  attributes: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        index: {
                          type: 'boolean',
                        },
                        key: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                        value: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  type: {
                    type: 'string',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            gas_used: {
              type: 'integer',
            },
            gas_wanted: {
              type: 'integer',
            },
            height: {
              type: 'integer',
            },
            info: {
              type: 'string',
            },
            logs: {
              items: {
                additionalProperties: false,
                properties: {
                  events: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        attributes: {
                          items: {
                            additionalProperties: false,
                            properties: {
                              key: {
                                type: 'string',
                              },
                              value: {
                                type: 'string',
                              },
                            },
                            type: 'object',
                          },
                          type: 'array',
                        },
                        type: {
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  log: {
                    type: 'string',
                  },
                  msg_index: {
                    type: 'integer',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            raw_log: {
              type: 'string',
            },
            timestamp: {
              type: 'string',
            },
            tx: {
              additionalProperties: false,
              properties: {
                type_url: {
                  type: 'string',
                },
                value: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
              },
              type: 'object',
            },
            txhash: {
              type: 'string',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L179',
      },
    },
    {
      name: 'state.Undelegate',
      description: 'Auth level: write',
      summary:
        "Undelegate undelegates a user's delegated tokens, unbonding them from the current validator.\n",
      paramStructure: 'by-position',
      params: [
        {
          name: 'delAddr',
          description: 'state.ValAddress',
          summary: '',
          schema: {
            examples: [
              'celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p',
            ],
            items: [
              {
                type: ['integer'],
              },
            ],
            type: ['array'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'amount',
          description: 'state.Int',
          summary: '',
          schema: {
            examples: ['42'],
            additionalProperties: false,
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'fee',
          description: 'state.Int',
          summary: '',
          schema: {
            examples: ['42'],
            additionalProperties: false,
            type: ['object'],
          },
          required: true,
          deprecated: false,
        },
        {
          name: 'gasLim',
          description: 'uint64',
          summary: '',
          schema: {
            examples: [42],
            type: ['integer'],
          },
          required: true,
          deprecated: false,
        },
      ],
      result: {
        name: '*state.TxResponse',
        description: '*state.TxResponse',
        summary: '',
        schema: {
          examples: [
            {
              height: 30497,
              txhash:
                '05D9016060072AA71B007A6CFB1B895623192D6616D513017964C3BFCD047282',
              data: '12260A242F636F736D6F732E62616E6B2E763162657461312E4D736753656E64526573706F6E7365',
              raw_log:
                '[{"msg_index":0,"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"amount","value":"30utia"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"module","value":"bank"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw"},{"key":"sender","value":"celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h"},{"key":"amount","value":"30utia"}]}]}]',
              logs: [
                {
                  msg_index: 0,
                  events: [
                    {
                      type: 'coin_received',
                      attributes: [
                        {
                          key: 'receiver',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'coin_spent',
                      attributes: [
                        {
                          key: 'spender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                    {
                      type: 'message',
                      attributes: [
                        {
                          key: 'action',
                          value: '/cosmos.bank.v1beta1.MsgSend',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'module',
                          value: 'bank',
                        },
                      ],
                    },
                    {
                      type: 'transfer',
                      attributes: [
                        {
                          key: 'recipient',
                          value:
                            'celestia12les8l8gzsacjjxwum9wdy7me8x9xajqch4gyw',
                        },
                        {
                          key: 'sender',
                          value:
                            'celestia1377k5an3f94v6wyaceu0cf4nq6gk2jtpc46g7h',
                        },
                        {
                          key: 'amount',
                          value: '30utia',
                        },
                      ],
                    },
                  ],
                },
              ],
              gas_wanted: 10000000,
              gas_used: 69085,
              events: [
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'ZmVl',
                      value: null,
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'YWNjX3NlcQ==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2gvMA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'tx',
                  attributes: [
                    {
                      key: 'c2lnbmF0dXJl',
                      value:
                        'R3NlVjhGNThFNGphR05LU0NicDBvNmRILytKK3BNQjNvUmtoNVpKNE8rVjdvNVVYQkJNNXpmNkdiYnN6OW9Takc1OUZkSHJRYzFvVVVBbnRBZW1wV0E9PQ==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'YWN0aW9u',
                      value: 'L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_spent',
                  attributes: [
                    {
                      key: 'c3BlbmRlcg==',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'coin_received',
                  attributes: [
                    {
                      key: 'cmVjZWl2ZXI=',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'transfer',
                  attributes: [
                    {
                      key: 'cmVjaXBpZW50',
                      value:
                        'Y2VsZXN0aWExMmxlczhsOGd6c2Fjamp4d3VtOXdkeTdtZTh4OXhhanFjaDRneXc=',
                      index: true,
                    },
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                    {
                      key: 'YW1vdW50',
                      value: 'MzB1dGlh',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'c2VuZGVy',
                      value:
                        'Y2VsZXN0aWExMzc3azVhbjNmOTR2Nnd5YWNldTBjZjRucTZnazJqdHBjNDZnN2g=',
                      index: true,
                    },
                  ],
                },
                {
                  type: 'message',
                  attributes: [
                    {
                      key: 'bW9kdWxl',
                      value: 'YmFuaw==',
                      index: true,
                    },
                  ],
                },
              ],
            },
          ],
          additionalProperties: false,
          properties: {
            code: {
              type: 'integer',
            },
            codespace: {
              type: 'string',
            },
            data: {
              type: 'string',
            },
            events: {
              items: {
                additionalProperties: false,
                properties: {
                  attributes: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        index: {
                          type: 'boolean',
                        },
                        key: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                        value: {
                          media: {
                            binaryEncoding: 'base64',
                          },
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  type: {
                    type: 'string',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            gas_used: {
              type: 'integer',
            },
            gas_wanted: {
              type: 'integer',
            },
            height: {
              type: 'integer',
            },
            info: {
              type: 'string',
            },
            logs: {
              items: {
                additionalProperties: false,
                properties: {
                  events: {
                    items: {
                      additionalProperties: false,
                      properties: {
                        attributes: {
                          items: {
                            additionalProperties: false,
                            properties: {
                              key: {
                                type: 'string',
                              },
                              value: {
                                type: 'string',
                              },
                            },
                            type: 'object',
                          },
                          type: 'array',
                        },
                        type: {
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                    type: 'array',
                  },
                  log: {
                    type: 'string',
                  },
                  msg_index: {
                    type: 'integer',
                  },
                },
                type: 'object',
              },
              type: 'array',
            },
            raw_log: {
              type: 'string',
            },
            timestamp: {
              type: 'string',
            },
            tx: {
              additionalProperties: false,
              properties: {
                type_url: {
                  type: 'string',
                },
                value: {
                  media: {
                    binaryEncoding: 'base64',
                  },
                  type: 'string',
                },
              },
              type: 'object',
            },
            txhash: {
              type: 'string',
            },
          },
          type: ['object'],
        },
        required: true,
        deprecated: false,
      },
      deprecated: false,
      externalDocs: {
        description:
          "Source of the default service's implementation of this method.",
        url: 'https://github.com/celestiaorg/celestia-node/blob/main/nodebuilder/state/state.go#L224',
      },
    },
  ],
};