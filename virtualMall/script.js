TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "hfovMin": 60,
  "vfov": 180,
  "id": "panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "class": "ImageResourceLevel",
       "url": "media/panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 4.3,
        "yaw": -25.11,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 7,
           "width": 24,
           "class": "ImageResourceLevel",
           "url": "media/panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.76
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6, this.camera_83DE4207_9AB2_A18C_41B5_E46811E4D27E); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_9781184F_9A12_A63E_41A7_BF7859FBE0AE",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 4.3,
        "yaw": -25.11,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 14,
           "width": 49,
           "class": "ImageResourceLevel",
           "url": "media/panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -6.76
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.24,
        "yaw": 18.27,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "width": 41,
           "class": "ImageResourceLevel",
           "url": "media/panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.07
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "click": "this.openLink(\"https://www.underarmour.com.my/en-my/grade-school-ua-lockdown-4-basketball-shoes/3022123.html?dwvar_3022123_color=400&dwvar_3022123_size=5&https:underarmour.com.my/en-my/?CID=PLA|MY||GGL|shoppingads|all|all|all|||0112018|smartshopping&CID=PLA|MY||GGL|shoppingads|all|all|all|||0112018|smartshopping&gclid=CjwKCAjw5vz2BRAtEiwAbcVILwgYJ5FpmX5WY5uCmpm5YCB6GvFrNK-KxcZgeRsXiVbRGGW_ZetJ8RoCShkQAvD_BwE\", \"_blank\")",
        "toolTip": "Click here to shop with us!",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_8937D5B2_9A12_EE66_41D0_7B5C5EA73D62",
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.24,
        "yaw": 18.27,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 70,
           "width": 82,
           "class": "ImageResourceLevel",
           "url": "media/panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -6.07
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.2,
        "yaw": -76.11,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "width": 40,
           "class": "ImageResourceLevel",
           "url": "media/panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": 0.14
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupMedia(this.window_95E1DB78_9A76_6784_41D6_05F0E0E584A5, this.video_9589CA56_9A77_A18C_41CA_F80311B6AD57, this.playList_8A626F56_9A76_9F8C_41C4_C2BD93142E53, '90%', '90%', false, true); this.playList_8A626F56_9A76_9F8C_41C4_C2BD93142E53.set('selectedIndex', 0); ; this.viewer_uid8A5DAF57_9A76_9F8C_41DA_6EC90FEA49D7VideoPlayer.play(); ",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_94926EFF_9A72_9E7C_41D6_FD0C46113E71",
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.2,
        "yaw": -76.11,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "width": 81,
           "class": "ImageResourceLevel",
           "url": "media/panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989_0_HS_3_0.png"
          }
         ]
        },
        "pitch": 0.14
       }
      ]
     }
    ]
   }
  ],
  "adjacentPanoramas": [
   {
    "backwardYaw": -178.21,
    "panorama": {
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "id": "panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6",
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2048,
          "width": 4096,
          "class": "ImageResourceLevel",
          "url": "media/panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6.jpeg"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 5.24,
           "yaw": 2.66,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 11,
              "width": 30,
              "class": "ImageResourceLevel",
              "url": "media/panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -9.63
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4, this.camera_83E0F24A_9AB2_A184_41E1_47C30A6863EC); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_94618535_9A16_6E62_41CB_5DF8DCE2A244",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 5.24,
           "yaw": 2.66,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 22,
              "width": 60,
              "class": "ImageResourceLevel",
              "url": "media/panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -9.63
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 3.05,
           "yaw": -178.21,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 10,
              "width": 17,
              "class": "ImageResourceLevel",
              "url": "media/panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -6.27
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989, this.camera_83F5C23A_9AB2_A184_41D9_73F891951E78); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_9402A733_9A12_AA65_41E1_10CA1B7783E7",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 3.05,
           "yaw": -178.21,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 21,
              "width": 34,
              "class": "ImageResourceLevel",
              "url": "media/panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -6.27
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 10.1,
           "yaw": -157.13,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 59,
              "width": 59,
              "class": "ImageResourceLevel",
              "url": "media/panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -15.11
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupMedia(this.window_8ADF6476_9A72_A18C_41D1_97AAAD48DD1C, this.album_8A2CCDC7_9A73_A28C_41CA_3132387342D3, this.playList_8B559779_9A72_6F84_41D1_04BD445A3B2F, '90%', '90%', false, false); this.playList_8B559779_9A72_6F84_41D1_04BD445A3B2F.set('selectedIndex', 0); ",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_95EE6029_9A71_E184_41AB_9EDBBF096745",
         "rollOverDisplay": false,
         "items": [
          {
           "hfov": 10.1,
           "yaw": -157.13,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 119,
              "class": "ImageResourceLevel",
              "url": "media/panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -15.11
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 4.63,
           "yaw": 37.24,
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 28,
              "width": 26,
              "class": "ImageResourceLevel",
              "url": "media/panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "pitch": -1.94
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.openLink(\"https://briochedoree.us/\", \"_blank\")",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_8A71CA39_9A8E_6184_41E1_14A1926593ED",
         "rollOverDisplay": false,
         "items": [
          {
           "hfov": 4.63,
           "yaw": 37.24,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 56,
              "width": 52,
              "class": "ImageResourceLevel",
              "url": "media/panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -1.94
          }
         ]
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "backwardYaw": -25.11,
       "panorama": "this.panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989",
       "yaw": -178.21,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "backwardYaw": -175.92,
       "panorama": {
        "class": "Panorama",
        "hfovMin": 60,
        "vfov": 180,
        "id": "panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4",
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2048,
             "width": 4096,
             "class": "ImageResourceLevel",
             "url": "media/panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4.jpeg"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "maps": [
             {
              "hfov": 4.3,
              "yaw": -175.92,
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 25,
                 "width": 24,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -12.01
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6, this.camera_8275A18C_9AB2_A29C_41D7_15053102C08A); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000"
             }
            ],
            "id": "overlay_94501EA1_9A11_FA65_41D2_F4D1B0E310CD",
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 4.3,
              "yaw": -175.92,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 50,
                 "width": 49,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -12.01
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 6.6,
              "yaw": 18.07,
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 7,
                 "width": 37,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -5.66
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC, this.camera_827E817D_9AB2_A27C_41E0_A20F1ECC9310); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000"
             }
            ],
            "id": "overlay_94F03F94_9A1E_DA22_41B1_5AB256F3177E",
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 6.6,
              "yaw": 18.07,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 14,
                 "width": 75,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -5.66
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 10.49,
              "yaw": 94.4,
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 54,
                 "width": 59,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -4.41
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.openLink(\"https://briochedoree.us/\", \"_blank\")",
              "mapColor": "#FF0000"
             }
            ],
            "id": "overlay_8BB03FE4_9A92_BE8C_41DE_F0A52170670C",
            "rollOverDisplay": false,
            "items": [
             {
              "hfov": 10.49,
              "yaw": 94.4,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 108,
                 "width": 119,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -4.41
             }
            ]
           }
          ]
         }
        ],
        "adjacentPanoramas": [
         {
          "backwardYaw": -140.53,
          "panorama": {
           "class": "Panorama",
           "hfovMin": 60,
           "vfov": 180,
           "id": "panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC",
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2048,
                "width": 4096,
                "class": "ImageResourceLevel",
                "url": "media/panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC.jpeg"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "maps": [
                {
                 "hfov": 5.14,
                 "yaw": -140.53,
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 15,
                    "width": 29,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -13.12
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4, this.camera_83AC21F2_9AB2_A285_4179_A0DF82BFF34E); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000"
                }
               ],
               "id": "overlay_951EBF83_9A12_BA26_41C3_FFFE1727A402",
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 5.14,
                 "yaw": -140.53,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 30,
                    "width": 59,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -13.12
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 6.94,
                 "yaw": -3.77,
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 10,
                    "width": 40,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -11.02
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685, this.camera_83B141E3_9AB2_A284_41D6_F133EA42F688); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000"
                }
               ],
               "id": "overlay_94ED8265_9A16_6AED_41E2_A9D3FBA989F1",
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 6.94,
                 "yaw": -3.77,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 21,
                    "width": 80,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -11.02
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 10.18,
                 "yaw": 75.63,
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 100,
                    "width": 57,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 1.6
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.openLink(\"https://bijouxcailloux.fr/\", \"_blank\")",
                 "mapColor": "#FF0000"
                }
               ],
               "id": "overlay_8A285F9B_9A97_BE84_41A3_73AF263A7065",
               "rollOverDisplay": false,
               "items": [
                {
                 "hfov": 10.18,
                 "yaw": 75.63,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 201,
                    "width": 115,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": 1.6
                }
               ]
              }
             ]
            }
           ],
           "adjacentPanoramas": [
            {
             "backwardYaw": -125.14,
             "panorama": {
              "class": "Panorama",
              "hfovMin": 60,
              "vfov": 180,
              "id": "panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2048,
                   "width": 4096,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "maps": [
                   {
                    "hfov": 5.15,
                    "yaw": -125.14,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 15,
                       "width": 30,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -12.17
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC, this.camera_83C88216_9AB2_A18C_41B5_51EC23DDC864); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "id": "overlay_95080758_9A16_6A22_41E2_13C9D6083810",
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 5.15,
                    "yaw": -125.14,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 30,
                       "width": 60,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -12.17
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 4.63,
                    "yaw": 41.32,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 9,
                       "width": 26,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -9.06
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0, this.camera_83FB4226_9AB2_A18C_41C8_4EE12656018D); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "id": "overlay_95E72750_9A11_AA22_41C6_285F6DCF2BDB",
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 4.63,
                    "yaw": 41.32,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 18,
                       "width": 53,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -9.06
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 11.35,
                    "yaw": -29.61,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 59,
                       "width": 66,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -13.3
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.openLink(\"files/file_8E115EEA_9AB1_9E84_41D3_A73BE0C0037B.pdf\", \"_blank\")",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "id": "overlay_8B0B2C73_9A91_E184_41C6_282488A8CE46",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "hfov": 11.35,
                    "yaw": -29.61,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 118,
                       "width": 132,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -13.3
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 18.69,
                    "yaw": 119.4,
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 56,
                       "width": 107,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -7.99
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.openLink(\"https://bijouxcailloux.fr/\", \"_blank\")",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "id": "overlay_8A7BB62A_9A9E_6184_41E2_253BCFCB180D",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "hfov": 18.69,
                    "yaw": 119.4,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 112,
                       "width": 214,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -7.99
                   }
                  ]
                 }
                ]
               }
              ],
              "adjacentPanoramas": [
               {
                "backwardYaw": -3.77,
                "panorama": "this.panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC",
                "yaw": -125.14,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "backwardYaw": -0.37,
                "panorama": {
                 "class": "Panorama",
                 "hfovMin": 60,
                 "vfov": 180,
                 "id": "panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0",
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2048,
                      "width": 4096,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0.jpeg"
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "hfov": 5.19,
                       "yaw": -0.37,
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 11,
                          "width": 30,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -10.5
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685, this.camera_8249B159_9AB2_A384_41D7_65968004AB61); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "id": "overlay_95C0039C_9A13_AA22_41C6_5223C86AD8D6",
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 5.19,
                       "yaw": -0.37,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 22,
                          "width": 60,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -10.5
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 9.09,
                       "yaw": 171.32,
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 13,
                          "width": 52,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -11.09
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_935C27C0_9A32_EA22_41B0_34DF654E1390, this.camera_8240D16D_9AB2_A39C_419D_1BB805922504); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "id": "overlay_8A832D07_9A0E_DE2E_41CE_B8B2E2AE4ED1",
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 9.09,
                       "yaw": 171.32,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 27,
                          "width": 105,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -11.09
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 10.59,
                       "yaw": 67.17,
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 51,
                          "width": 61,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -11.58
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupMedia(this.window_8F525291_9AB1_A684_41BB_4A1A389731CC, this.video_8A3C71CA_9A92_6285_41DA_26854B9ECDCF, this.playList_822AD119_9AB2_A384_41C6_6DD88D37616A, '90%', '90%', false, true); this.playList_822AD119_9AB2_A384_41C6_6DD88D37616A.set('selectedIndex', 0); ; this.viewer_uid82290119_9AB2_A384_41E0_91FA2C8DB6B4VideoPlayer.play(); ",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "id": "overlay_8AC6D050_9A91_A184_41CB_659D1C722DB0",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "hfov": 10.59,
                       "yaw": 67.17,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 103,
                          "width": 122,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -11.58
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 13.51,
                       "yaw": -55.01,
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 72,
                          "width": 76,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_0_HS_3_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -2.02
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.openLink(\"https://www.afflelou.com/\", \"_blank\")",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "id": "overlay_8B5E9B01_9A92_6784_4160_C76B2D8E87BE",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "hfov": 13.51,
                       "yaw": -55.01,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 145,
                          "width": 153,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -2.02
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 41.32,
                   "panorama": "this.panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685",
                   "yaw": -0.37,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "backwardYaw": -144.51,
                   "panorama": {
                    "class": "Panorama",
                    "hfovMin": 60,
                    "vfov": 180,
                    "id": "panorama_935C27C0_9A32_EA22_41B0_34DF654E1390",
                    "frames": [
                     {
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 2048,
                         "width": 4096,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_935C27C0_9A32_EA22_41B0_34DF654E1390.jpeg"
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "maps": [
                         {
                          "hfov": 6.64,
                          "yaw": -144.51,
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 8,
                             "width": 38,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -9
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0, this.camera_839451BF_9AB2_A2FC_41D8_67DF0F0152B0); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "id": "overlay_8B33378A_9A71_AA26_41D2_7D799C73D08E",
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 6.64,
                          "yaw": -144.51,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 17,
                             "width": 76,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -9
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "hfov": 10.48,
                          "yaw": 74.78,
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 61,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -14.29
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553, this.camera_838701D4_9AB2_A28C_41D5_76939144B1E6); this.mainPlayList.set('selectedIndex', 7)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "id": "overlay_8B23ECF2_9A72_7FE6_41AF_66CB10FE136F",
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 10.48,
                          "yaw": 74.78,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 32,
                             "width": 123,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -14.29
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "hfov": 10.44,
                          "yaw": 3.53,
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 62,
                             "width": 59,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -0.7
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.openLink(\"https://www.terranovastyle.com/\", \"_blank\")",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "id": "overlay_89AF2DAB_9A96_A284_41E1_C3509ACBA6DC",
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "hfov": 10.44,
                          "yaw": 3.53,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 125,
                             "width": 118,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -0.7
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "hfov": 14.15,
                          "yaw": 137.01,
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 62,
                             "width": 80,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_0_HS_3_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -1.79
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.openLink(\"https://www.juliendorcel.com/\", \"_blank\")",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "id": "overlay_899B836C_9A96_679C_41DA_B66F23B69657",
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "hfov": 14.15,
                          "yaw": 137.01,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 125,
                             "width": 161,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_0_HS_3_0.png"
                            }
                           ]
                          },
                          "pitch": -1.79
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 171.32,
                      "panorama": "this.panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0",
                      "yaw": -144.51,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "backwardYaw": -7.92,
                      "panorama": {
                       "class": "Panorama",
                       "hfovMin": 60,
                       "vfov": 180,
                       "id": "panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553",
                       "frames": [
                        {
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 2048,
                            "width": 4096,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553.jpeg"
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "maps": [
                            {
                             "hfov": 7.47,
                             "yaw": -7.92,
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 10,
                                "width": 42,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -8.24
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_935C27C0_9A32_EA22_41B0_34DF654E1390, this.camera_830C426F_9AB2_A19C_41B5_A0A68D1BBC34); this.mainPlayList.set('selectedIndex', 6)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "id": "overlay_8B858085_9A71_A622_41AF_7159E5001401",
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "hfov": 7.47,
                             "yaw": -7.92,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 20,
                                "width": 85,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -8.24
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "hfov": 10.7,
                             "yaw": 153.89,
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 63,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -15.65
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D, this.camera_8311B25A_9AB2_A184_41E0_7673483A252E); this.mainPlayList.set('selectedIndex', 8)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "id": "overlay_8B3FDC05_9A7E_DE22_41D1_B59025A753E6",
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "hfov": 10.7,
                             "yaw": 153.89,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 33,
                                "width": 126,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -15.65
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": -160.19,
                         "panorama": {
                          "class": "Panorama",
                          "hfovMin": 60,
                          "vfov": 180,
                          "id": "panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D",
                          "frames": [
                           {
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 2048,
                               "width": 4096,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D.jpeg"
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "maps": [
                               {
                                "hfov": 11.57,
                                "yaw": -160.19,
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 11,
                                   "width": 67,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -13.05
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553, this.camera_8399D1B0_9AB2_A284_41C8_BEC9BE63AFA5); this.mainPlayList.set('selectedIndex', 7)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "id": "overlay_8A56E2A5_9A0E_EA62_41D5_BBAE11B99221",
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "hfov": 11.57,
                                "yaw": -160.19,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 23,
                                   "width": 135,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -13.05
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "hfov": 10.72,
                                "yaw": 53.55,
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 14,
                                   "width": 61,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -8.78
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49, this.camera_826251A0_9AB2_A284_41D0_2F43326E8EEE); this.mainPlayList.set('selectedIndex', 9)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "id": "overlay_88549157_9A7E_A62E_41D1_D40F6D8698A9",
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "hfov": 10.72,
                                "yaw": 53.55,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 28,
                                   "width": 123,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -8.78
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "hfov": 9.35,
                                "yaw": 118.96,
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 74,
                                   "width": 53,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -0.47
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.openLink(\"https://www.riuparis.fr/\", \"_blank\")",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "id": "overlay_89A1F42F_9A8F_A19C_41E0_FBB6BA444C28",
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "hfov": 9.35,
                                "yaw": 118.96,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 148,
                                   "width": 106,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "pitch": -0.47
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": -83.24,
                            "panorama": {
                             "class": "Panorama",
                             "hfovMin": 60,
                             "vfov": 180,
                             "id": "panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49",
                             "frames": [
                              {
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 2048,
                                  "width": 4096,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49.jpeg"
                                 }
                                ]
                               },
                               "thumbnailUrl": "media/panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "maps": [
                                  {
                                   "hfov": 7.07,
                                   "yaw": -83.24,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 14,
                                      "width": 40,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -9.62
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D, this.camera_82501149_9AB2_A384_41D0_78446FB3189B); this.mainPlayList.set('selectedIndex', 8)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "id": "overlay_8BA646B7_9A72_AA6E_41DC_3A9B9DC9C090",
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "hfov": 7.07,
                                   "yaw": -83.24,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 29,
                                      "width": 81,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -9.62
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "hfov": 11.18,
                                   "yaw": 86.73,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 13,
                                      "width": 66,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -16.13
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.mainPlayList.set('selectedIndex', 0)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "id": "overlay_885BC1EA_9A73_E9E6_41E2_B7817C9C255D",
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "hfov": 11.18,
                                   "yaw": 86.73,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 27,
                                      "width": 132,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -16.13
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "hfov": 9.93,
                                   "yaw": 29.77,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 70,
                                      "width": 56,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49_0_HS_2_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -4.87
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.openLink(\"https://www.facebook.com/Vanille-Fraise-544050455667018/\", \"_blank\")",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "id": "overlay_89B81BF4_9A92_668C_41DA_5B133425DC68",
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "hfov": 9.93,
                                   "yaw": 29.77,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 141,
                                      "width": 113,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -4.87
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": 53.55,
                               "panorama": "this.panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D",
                               "yaw": -83.24,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              }
                             ],
                             "pitch": 0,
                             "hfov": 360,
                             "thumbnailUrl": "media/panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49_t.jpg",
                             "hfovMax": 120,
                             "partial": false,
                             "label": "mall_11"
                            },
                            "yaw": 53.55,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "backwardYaw": 153.89,
                            "panorama": "this.panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553",
                            "yaw": -160.19,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           }
                          ],
                          "pitch": 0,
                          "hfov": 360,
                          "thumbnailUrl": "media/panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D_t.jpg",
                          "hfovMax": 120,
                          "partial": false,
                          "label": "mall_7"
                         },
                         "yaw": 153.89,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "backwardYaw": 74.78,
                         "panorama": "this.panorama_935C27C0_9A32_EA22_41B0_34DF654E1390",
                         "yaw": -7.92,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        }
                       ],
                       "pitch": 0,
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553_t.jpg",
                       "hfovMax": 120,
                       "partial": false,
                       "label": "mall_10"
                      },
                      "yaw": 74.78,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     }
                    ],
                    "pitch": 0,
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_t.jpg",
                    "hfovMax": 120,
                    "partial": false,
                    "label": "mall_9"
                   },
                   "yaw": 171.32,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  }
                 ],
                 "pitch": 0,
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_t.jpg",
                 "hfovMax": 120,
                 "partial": false,
                 "label": "mall_6"
                },
                "yaw": 41.32,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ],
              "pitch": 0,
              "hfov": 360,
              "thumbnailUrl": "media/panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_t.jpg",
              "hfovMax": 120,
              "partial": false,
              "label": "mall_5"
             },
             "yaw": -3.77,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "backwardYaw": 18.07,
             "panorama": "this.panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4",
             "yaw": -140.53,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "pitch": 0,
           "hfov": 360,
           "thumbnailUrl": "media/panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC_t.jpg",
           "hfovMax": 120,
           "partial": false,
           "label": "mall_4"
          },
          "yaw": 18.07,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "backwardYaw": 2.66,
          "panorama": "this.panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6",
          "yaw": -175.92,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "pitch": 0,
        "hfov": 360,
        "thumbnailUrl": "media/panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4_t.jpg",
        "hfovMax": 120,
        "partial": false,
        "label": "mall_3"
       },
       "yaw": 2.66,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "pitch": 0,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_t.jpg",
     "hfovMax": 120,
     "partial": false,
     "label": "mall_2"
    },
    "yaw": -25.11,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989_t.jpg",
  "hfovMax": 120,
  "partial": false,
  "label": "mall_1"
 },
 {
  "touchControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_8EDFB87A_9AB2_6184_41D8_27BDF006DBDD",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 "this.panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 "this.panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 "this.panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 "this.panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 "this.panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 "this.panorama_935C27C0_9A32_EA22_41B0_34DF654E1390",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 "this.panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_8E3390CB_9AB3_A284_41CD_660166144FC5",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 "this.panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 "this.panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "vfov": 180,
  "id": "panorama_935C13DA_9A32_EA26_41D2_855EC25C3683",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "class": "ImageResourceLevel",
       "url": "media/panorama_935C13DA_9A32_EA26_41D2_855EC25C3683_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_935C13DA_9A32_EA26_41D2_855EC25C3683.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_935C13DA_9A32_EA26_41D2_855EC25C3683_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_935C13DA_9A32_EA26_41D2_855EC25C3683_t.jpg",
  "hfovMax": 120,
  "partial": false,
  "label": "mall_8"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_935C13DA_9A32_EA26_41D2_855EC25C3683_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/video_9589CA56_9A77_A18C_41CA_F80311B6AD57_t.jpg",
  "class": "Video",
  "video": {
   "height": 360,
   "class": "VideoResource",
   "width": 640,
   "mp4Url": "media/video_9589CA56_9A77_A18C_41CA_F80311B6AD57.mp4"
  },
  "label": "milan",
  "width": 640,
  "loop": false,
  "id": "video_9589CA56_9A77_A18C_41CA_F80311B6AD57",
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer"
 },
 {
  "thumbnailUrl": "media/album_8A2CCDC7_9A73_A28C_41CA_3132387342D3_t.png",
  "class": "PhotoAlbum",
  "id": "album_8A2CCDC7_9A73_A28C_41CA_3132387342D3",
  "label": "Photo Album map",
  "playList": {
   "id": "album_8A2CCDC7_9A73_A28C_41CA_3132387342D3_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "easing": "linear",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1
      },
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "x": "0.71",
       "class": "PhotoCameraPosition",
       "y": "0.44",
       "zoomFactor": 1.1
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_8A2CCDC7_9A73_A28C_41CA_3132387342D3_0_t.jpg",
      "class": "Photo",
      "id": "album_8A2CCDC7_9A73_A28C_41CA_3132387342D3_0",
      "label": "map",
      "width": 1500,
      "height": 1041,
      "duration": 5000,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_8A2CCDC7_9A73_A28C_41CA_3132387342D3_0.jpg"
        }
       ]
      }
     }
    }
   ]
  }
 },
 {
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer",
  "class": "PhotoAlbumPlayer"
 },
 "this.album_8A2CCDC7_9A73_A28C_41CA_3132387342D3_0",
 {
  "thumbnailUrl": "media/video_8A3C71CA_9A92_6285_41DA_26854B9ECDCF_t.jpg",
  "class": "Video",
  "video": {
   "height": 360,
   "class": "VideoResource",
   "width": 640,
   "mp4Url": "media/video_8A3C71CA_9A92_6285_41DA_26854B9ECDCF.mp4"
  },
  "label": "y2mate.com - Meet the new IKEA Catalogue._VANEZkOkjO4_360p",
  "width": 640,
  "loop": false,
  "id": "video_8A3C71CA_9A92_6285_41DA_26854B9ECDCF",
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_915413F0_9A32_A9E2_41D4_D4B8B3D94989",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_93598BA2_9A32_BA66_41B1_1A84BB9BA7C6",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "camera": "this.panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_935C3F96_9A32_BA2E_41D6_767B59F1ADF4",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "camera": "this.panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_935C43B2_9A32_AA66_41DA_6AE336FAF2EC",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "camera": "this.panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_935C37DE_9A32_A9DF_41DA_F0F9E6817685",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "camera": "this.panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_935C5BD8_9A32_DA22_41C3_20BEBC19DDD0",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "camera": "this.panorama_935C27C0_9A32_EA22_41B0_34DF654E1390_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_935C27C0_9A32_EA22_41B0_34DF654E1390",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "camera": "this.panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_935C0BB7_9A32_FA6E_41E1_E70F2CE01553",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "camera": "this.panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_935C0FCE_9A32_DA3F_41DF_9961EA5F5F6D",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "camera": "this.panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_935CDFD2_9A32_FA26_41A9_CA67B4D1FD49",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "camera": "this.panorama_935C13DA_9A32_EA26_41D2_855EC25C3683_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_935C13DA_9A32_EA26_41D2_855EC25C3683",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "class": "VideoPlayListItem",
    "media": "this.video_9589CA56_9A77_A18C_41CA_F80311B6AD57",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 11, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 11, this.video_9589CA56_9A77_A18C_41CA_F80311B6AD57)"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_8A2CCDC7_9A73_A28C_41CA_3132387342D3"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 0)",
    "class": "VideoPlayListItem",
    "media": "this.video_8A3C71CA_9A92_6285_41DA_26854B9ECDCF",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 13, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 13, this.video_8A3C71CA_9A92_6285_41DA_26854B9ECDCF)"
   }
  ]
 },
 {
  "id": "playList_8A626F56_9A76_9F8C_41C4_C2BD93142E53",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid8A5DAF57_9A76_9F8C_41DA_6EC90FEA49D7VideoPlayer)",
    "class": "VideoPlayListItem",
    "media": "this.video_9589CA56_9A77_A18C_41CA_F80311B6AD57",
    "player": {
     "id": "viewer_uid8A5DAF57_9A76_9F8C_41DA_6EC90FEA49D7VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "playbackBarHeadShadowColor": "#000000",
      "progressRight": 0,
      "toolTipShadowColor": "#333333",
      "progressBackgroundColorRatios": [
       0
      ],
      "toolTipFontStyle": "normal",
      "playbackBarHeight": 10,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressOpacity": 1,
      "progressBarBackgroundColor": [
       "#FFCC00"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadShadow": true,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadHeight": 15,
      "minHeight": 50,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "toolTipBorderColor": "#767676",
      "borderSize": 0,
      "playbackBarHeadWidth": 6,
      "playbackBarBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "minWidth": 100,
      "height": "100%",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarRight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "toolTipPaddingLeft": 6,
      "paddingBottom": 0,
      "paddingRight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontColor": "#606060",
      "toolTipShadowBlurRadius": 3,
      "id": "viewer_uid82368112_9AB2_A384_41D5_F08C7FD3D178",
      "progressBarOpacity": 1,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderRadius": 0,
      "progressHeight": 10,
      "toolTipPaddingTop": 4,
      "shadow": false,
      "toolTipOpacity": 1,
      "progressLeft": 0,
      "progressBottom": 2,
      "progressBarBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical",
      "borderRadius": 0,
      "playbackBarHeadOpacity": 1,
      "progressBarBorderSize": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBorderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressOpacity": 1,
      "transitionMode": "blending",
      "paddingLeft": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#000000",
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBorderRadius": 0,
      "playbackBarBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowSpread": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBorderColor": "#FFFFFF"
     },
     "class": "VideoPlayer"
    },
    "start": "this.viewer_uid8A5DAF57_9A76_9F8C_41DA_6EC90FEA49D7VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_8A626F56_9A76_9F8C_41C4_C2BD93142E53, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_8A626F56_9A76_9F8C_41C4_C2BD93142E53, 0, this.video_9589CA56_9A77_A18C_41CA_F80311B6AD57)"
   }
  ]
 },
 {
  "change": "this.showComponentsWhileMouseOver(this.container_8235A114_9AB2_A38C_41D6_A7805B39A4C8, [this.htmltext_8235D114_9AB2_A38C_41DA_23EAB158BF3C,this.component_82344115_9AB2_A38F_41E3_354559A37D56,this.component_8234B116_9AB2_A38C_41D2_9C6B350B05F4], 2000)",
  "id": "playList_8B559779_9A72_6F84_41D1_04BD445A3B2F",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid8B55C779_9A72_6F84_41C6_45AABD013C68PhotoAlbumPlayer",
     "viewerArea": {
      "playbackBarHeadShadowColor": "#000000",
      "progressRight": 0,
      "toolTipShadowColor": "#333333",
      "progressBackgroundColorRatios": [
       0
      ],
      "toolTipFontStyle": "normal",
      "playbackBarHeight": 10,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressOpacity": 1,
      "progressBarBackgroundColor": [
       "#FFCC00"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadShadow": true,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadHeight": 15,
      "minHeight": 50,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "toolTipBorderColor": "#767676",
      "borderSize": 0,
      "playbackBarHeadWidth": 6,
      "playbackBarBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "minWidth": 100,
      "height": "100%",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarRight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "toolTipPaddingLeft": 6,
      "paddingBottom": 0,
      "paddingRight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontColor": "#606060",
      "toolTipShadowBlurRadius": 3,
      "id": "viewer_uid82355113_9AB2_A384_41E1_58ECC24FFE51",
      "progressBarOpacity": 1,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderRadius": 0,
      "progressHeight": 10,
      "toolTipPaddingTop": 4,
      "shadow": false,
      "toolTipOpacity": 1,
      "progressLeft": 0,
      "progressBottom": 2,
      "progressBarBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical",
      "borderRadius": 0,
      "playbackBarHeadOpacity": 1,
      "progressBarBorderSize": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBorderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressOpacity": 1,
      "transitionMode": "blending",
      "paddingLeft": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#000000",
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBorderRadius": 0,
      "playbackBarBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowSpread": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBorderColor": "#FFFFFF"
     },
     "class": "PhotoAlbumPlayer"
    },
    "class": "PhotoAlbumPlayListItem",
    "id": "albumitem_8B4F7780_9A72_6E84_41D0_1DA8D65ADD2C",
    "begin": "this.updateMediaLabelFromPlayList(this.album_8A2CCDC7_9A73_A28C_41CA_3132387342D3_AlbumPlayList, this.htmltext_8235D114_9AB2_A38C_41DA_23EAB158BF3C, this.albumitem_8B4F7780_9A72_6E84_41D0_1DA8D65ADD2C); this.loopAlbum(this.playList_8B559779_9A72_6F84_41D1_04BD445A3B2F, 0)",
    "media": "this.album_8A2CCDC7_9A73_A28C_41CA_3132387342D3"
   }
  ]
 },
 {
  "id": "playList_822AD119_9AB2_A384_41C6_6DD88D37616A",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid82290119_9AB2_A384_41E0_91FA2C8DB6B4VideoPlayer)",
    "class": "VideoPlayListItem",
    "media": "this.video_8A3C71CA_9A92_6285_41DA_26854B9ECDCF",
    "player": {
     "id": "viewer_uid82290119_9AB2_A384_41E0_91FA2C8DB6B4VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "playbackBarHeadShadowColor": "#000000",
      "progressRight": 0,
      "toolTipShadowColor": "#333333",
      "progressBackgroundColorRatios": [
       0
      ],
      "toolTipFontStyle": "normal",
      "playbackBarHeight": 10,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressOpacity": 1,
      "progressBarBackgroundColor": [
       "#FFCC00"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadShadow": true,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadHeight": 15,
      "minHeight": 50,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "toolTipBorderColor": "#767676",
      "borderSize": 0,
      "playbackBarHeadWidth": 6,
      "playbackBarBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "minWidth": 100,
      "height": "100%",
      "playbackBarOpacity": 1,
      "width": "100%",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarRight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "toolTipPaddingLeft": 6,
      "paddingBottom": 0,
      "paddingRight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontColor": "#606060",
      "toolTipShadowBlurRadius": 3,
      "id": "viewer_uid82290119_9AB2_A384_41E0_91FA2C8DB6B4",
      "progressBarOpacity": 1,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderRadius": 0,
      "progressHeight": 10,
      "toolTipPaddingTop": 4,
      "shadow": false,
      "toolTipOpacity": 1,
      "progressLeft": 0,
      "progressBottom": 2,
      "progressBarBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical",
      "borderRadius": 0,
      "playbackBarHeadOpacity": 1,
      "progressBarBorderSize": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBorderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressOpacity": 1,
      "transitionMode": "blending",
      "paddingLeft": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#000000",
      "class": "ViewerArea",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontSize": 12,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBorderRadius": 0,
      "playbackBarBorderSize": 0,
      "toolTipTextShadowOpacity": 0,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowSpread": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBorderColor": "#FFFFFF"
     },
     "class": "VideoPlayer"
    },
    "start": "this.viewer_uid82290119_9AB2_A384_41E0_91FA2C8DB6B4VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_822AD119_9AB2_A384_41C6_6DD88D37616A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_822AD119_9AB2_A384_41C6_6DD88D37616A, 0, this.video_8A3C71CA_9A92_6285_41DA_26854B9ECDCF)"
   }
  ]
 },
 {
  "veilColorDirection": "horizontal",
  "closeButtonPressedIconLineWidth": 3,
  "backgroundColor": [],
  "bodyPaddingLeft": 0,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "modal": true,
  "bodyBackgroundOpacity": 0,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 20,
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#B2B2B2",
  "children": [
   "this.viewer_uid82368112_9AB2_A384_41D5_F08C7FD3D178"
  ],
  "title": "Milan Expo 2015",
  "minHeight": 20,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontFamily": "Georgia",
  "titleFontWeight": "bold",
  "paddingTop": 0,
  "borderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "headerPaddingTop": 10,
  "closeButtonIconWidth": 20,
  "scrollBarMargin": 2,
  "minWidth": 20,
  "overflow": "scroll",
  "layout": "vertical",
  "backgroundColorDirection": "vertical",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBorderSize": 0,
  "shadowColor": "#000000",
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerPaddingRight": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "shadowHorizontalLength": 3,
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "shadowSpread": 1,
  "backgroundOpacity": 1,
  "scrollBarWidth": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "id": "window_95E1DB78_9A76_6784_41D6_05F0E0E584A5",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "gap": 10,
  "shadow": true,
  "bodyPaddingBottom": 0,
  "titleFontStyle": "normal",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "borderRadius": 5,
  "shadowVerticalLength": 0,
  "closeButtonRollOverBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "backgroundColorRatios": [],
  "headerBackgroundOpacity": 0,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundColorRatios": [],
  "veilOpacity": 0.4,
  "titlePaddingTop": 5,
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontColor": "#FFFFFF",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerPaddingLeft": 10,
  "horizontalAlign": "center",
  "class": "Window",
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "titlePaddingRight": 5,
  "close": "this.playList_8A626F56_9A76_9F8C_41C4_C2BD93142E53.set('selectedIndex', -1);",
  "shadowBlurRadius": 6,
  "headerPaddingBottom": 5,
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleTextDecoration": "none",
  "closeButtonPressedBackgroundColor": [],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titleFontSize": 14,
  "contentOpaque": false,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "headerBorderColor": "#000000",
  "footerBackgroundOpacity": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "veilColorDirection": "horizontal",
  "closeButtonPressedIconLineWidth": 3,
  "backgroundColor": [],
  "bodyPaddingLeft": 0,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "modal": true,
  "bodyBackgroundOpacity": 0,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 20,
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#B2B2B2",
  "children": [
   {
    "backgroundOpacity": 0.3,
    "id": "container_8235A114_9AB2_A38C_41D6_A7805B39A4C8",
    "backgroundColor": [],
    "shadow": false,
    "borderRadius": 0,
    "gap": 10,
    "backgroundColorRatios": [],
    "scrollBarVisible": "rollOver",
    "children": [
     "this.viewer_uid82355113_9AB2_A384_41E1_58ECC24FFE51",
     {
      "backgroundColor": [],
      "backgroundOpacity": 0.3,
      "bottom": 0,
      "shadow": false,
      "borderRadius": 0,
      "gap": 10,
      "backgroundColorRatios": [],
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "backgroundOpacity": 0.7,
        "id": "htmltext_8235D114_9AB2_A38C_41DA_23EAB158BF3C",
        "backgroundColor": [
         "#000000"
        ],
        "shadow": false,
        "visible": false,
        "borderRadius": 0,
        "backgroundColorRatios": [
         0
        ],
        "scrollBarVisible": "rollOver",
        "minHeight": 0,
        "paddingLeft": 10,
        "hideEffect": {
         "duration": 250,
         "easing": "cubic_in_out",
         "class": "FadeOutEffect"
        },
        "class": "HTMLText",
        "paddingTop": 5,
        "borderSize": 0,
        "html": "",
        "minWidth": 0,
        "scrollBarMargin": 2,
        "width": "100%",
        "scrollBarColor": "#000000",
        "showEffect": {
         "duration": 250,
         "easing": "cubic_in_out",
         "class": "FadeInEffect"
        },
        "backgroundColorDirection": "vertical",
        "paddingBottom": 5,
        "paddingRight": 10,
        "scrollBarOpacity": 0.5,
        "scrollBarWidth": 10
       }
      ],
      "minHeight": 20,
      "paddingLeft": 0,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingTop": 0,
      "borderSize": 0,
      "minWidth": 20,
      "scrollBarMargin": 2,
      "scrollBarColor": "#FFFFFF",
      "overflow": "scroll",
      "layout": "vertical",
      "backgroundColorDirection": "vertical",
      "contentOpaque": true,
      "verticalAlign": "bottom",
      "paddingBottom": 0,
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "left": 0,
      "right": 0,
      "height": "30%",
      "scrollBarWidth": 7
     },
     {
      "backgroundOpacity": 0,
      "id": "component_82344115_9AB2_A38F_41E3_354559A37D56",
      "top": "45%",
      "mode": "push",
      "shadow": false,
      "iconURL": "skin/album_left.png",
      "visible": false,
      "borderRadius": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_8A2CCDC7_9A73_A28C_41CA_3132387342D3_AlbumPlayList, -1)",
      "minHeight": 0,
      "paddingLeft": 0,
      "hideEffect": {
       "duration": 250,
       "easing": "cubic_in_out",
       "class": "FadeOutEffect"
      },
      "horizontalAlign": "center",
      "class": "IconButton",
      "paddingTop": 0,
      "borderSize": 0,
      "minWidth": 0,
      "cursor": "hand",
      "showEffect": {
       "duration": 250,
       "easing": "cubic_in_out",
       "class": "FadeInEffect"
      },
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "paddingRight": 0,
      "left": 10,
      "transparencyActive": false
     },
     {
      "backgroundOpacity": 0,
      "id": "component_8234B116_9AB2_A38C_41D2_9C6B350B05F4",
      "mode": "push",
      "shadow": false,
      "iconURL": "skin/album_right.png",
      "visible": false,
      "borderRadius": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_8A2CCDC7_9A73_A28C_41CA_3132387342D3_AlbumPlayList, 1)",
      "minHeight": 0,
      "paddingLeft": 0,
      "hideEffect": {
       "duration": 250,
       "easing": "cubic_in_out",
       "class": "FadeOutEffect"
      },
      "horizontalAlign": "center",
      "class": "IconButton",
      "paddingTop": 0,
      "borderSize": 0,
      "minWidth": 0,
      "cursor": "hand",
      "showEffect": {
       "duration": 250,
       "easing": "cubic_in_out",
       "class": "FadeInEffect"
      },
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "paddingRight": 0,
      "right": 10,
      "transparencyActive": false,
      "top": "45%"
     }
    ],
    "minHeight": 20,
    "paddingLeft": 0,
    "horizontalAlign": "left",
    "class": "Container",
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "minWidth": 20,
    "scrollBarMargin": 2,
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "layout": "absolute",
    "backgroundColorDirection": "vertical",
    "contentOpaque": false,
    "verticalAlign": "top",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "scrollBarWidth": 10
   }
  ],
  "title": "Directory",
  "minHeight": 20,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontFamily": "Georgia",
  "titleFontWeight": "normal",
  "paddingTop": 0,
  "borderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "headerPaddingTop": 10,
  "closeButtonIconWidth": 20,
  "scrollBarMargin": 2,
  "minWidth": 20,
  "overflow": "scroll",
  "layout": "vertical",
  "backgroundColorDirection": "vertical",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBorderSize": 0,
  "shadowColor": "#000000",
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerPaddingRight": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "shadowHorizontalLength": 3,
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "shadowSpread": 1,
  "backgroundOpacity": 1,
  "scrollBarWidth": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "id": "window_8ADF6476_9A72_A18C_41D1_97AAAD48DD1C",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "gap": 10,
  "shadow": true,
  "bodyPaddingBottom": 0,
  "titleFontStyle": "normal",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "borderRadius": 5,
  "shadowVerticalLength": 0,
  "closeButtonRollOverBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "backgroundColorRatios": [],
  "headerBackgroundOpacity": 0,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundColorRatios": [],
  "veilOpacity": 0.4,
  "titlePaddingTop": 5,
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontColor": "#FFFFFF",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerPaddingLeft": 10,
  "horizontalAlign": "center",
  "class": "Window",
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "titlePaddingRight": 5,
  "close": "this.playList_8B559779_9A72_6F84_41D1_04BD445A3B2F.set('selectedIndex', -1);",
  "shadowBlurRadius": 6,
  "headerPaddingBottom": 5,
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleTextDecoration": "none",
  "closeButtonPressedBackgroundColor": [],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titleFontSize": 16,
  "contentOpaque": false,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "headerBorderColor": "#000000",
  "footerBackgroundOpacity": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "veilColorDirection": "horizontal",
  "closeButtonPressedIconLineWidth": 3,
  "backgroundColor": [],
  "bodyPaddingLeft": 0,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "modal": true,
  "bodyBackgroundOpacity": 0,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 20,
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#B2B2B2",
  "children": [
   "this.viewer_uid82290119_9AB2_A384_41E0_91FA2C8DB6B4"
  ],
  "title": "",
  "minHeight": 20,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontFamily": "Arial",
  "titleFontWeight": "normal",
  "paddingTop": 0,
  "borderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "headerPaddingTop": 10,
  "closeButtonIconWidth": 20,
  "scrollBarMargin": 2,
  "minWidth": 20,
  "overflow": "scroll",
  "layout": "vertical",
  "backgroundColorDirection": "vertical",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBorderSize": 0,
  "shadowColor": "#000000",
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerPaddingRight": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "shadowHorizontalLength": 3,
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "shadowSpread": 1,
  "backgroundOpacity": 1,
  "scrollBarWidth": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "id": "window_8F525291_9AB1_A684_41BB_4A1A389731CC",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "gap": 10,
  "shadow": true,
  "bodyPaddingBottom": 0,
  "titleFontStyle": "normal",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "borderRadius": 5,
  "shadowVerticalLength": 0,
  "closeButtonRollOverBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "backgroundColorRatios": [],
  "headerBackgroundOpacity": 0,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundColorRatios": [],
  "veilOpacity": 0.4,
  "titlePaddingTop": 5,
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontColor": "#000000",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerPaddingLeft": 10,
  "horizontalAlign": "center",
  "class": "Window",
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "titlePaddingRight": 5,
  "close": "this.playList_822AD119_9AB2_A384_41C6_6DD88D37616A.set('selectedIndex', -1);",
  "shadowBlurRadius": 6,
  "headerPaddingBottom": 5,
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleTextDecoration": "none",
  "closeButtonPressedBackgroundColor": [],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titleFontSize": 14,
  "contentOpaque": false,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerVerticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "headerBorderColor": "#000000",
  "footerBackgroundOpacity": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -126.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_82501149_9AB2_A384_41D0_78446FB3189B",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -138.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_8249B159_9AB2_A384_41D7_65968004AB61",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 35.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_8240D16D_9AB2_A39C_419D_1BB805922504",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 39.47,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_827E817D_9AB2_A27C_41E0_A20F1ECC9310",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -177.34,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_8275A18C_9AB2_A29C_41D7_15053102C08A",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 96.76,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_826251A0_9AB2_A284_41D0_2F43326E8EEE",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -26.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_8399D1B0_9AB2_A284_41C8_BEC9BE63AFA5",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_839821B0_9AB2_A284_41D4_BE85E7A56FA3",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -8.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_839451BF_9AB2_A2FC_41D8_67DF0F0152B0",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 172.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_838701D4_9AB2_A28C_41D5_76939144B1E6",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_838771D4_9AB2_A28C_41CE_75C89A1DBCF1",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 54.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_83B141E3_9AB2_A284_41D6_F133EA42F688",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -161.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_83AC21F2_9AB2_A285_4179_A0DF82BFF34E",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 1.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_83DE4207_9AB2_A18C_41B5_E46811E4D27E",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 176.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_83C88216_9AB2_A18C_41B5_51EC23DDC864",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 179.63,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_83FB4226_9AB2_A18C_41C8_4EE12656018D",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 154.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_83F5C23A_9AB2_A184_41D9_73F891951E78",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_83F4323A_9AB2_A184_41DA_4FDEF6543B80",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 4.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_83E0F24A_9AB2_A184_41E1_47C30A6863EC",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 19.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_8311B25A_9AB2_A184_41E0_7673483A252E",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -105.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_830C426F_9AB2_A19C_41B5_A0A68D1BBC34",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 291.5,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 34.25,
     "yawSpeed": 2.66,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  }
 }
], "children": [
 {
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 0,
  "toolTipShadowColor": "#FFFFFF",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipFontStyle": "normal",
  "playbackBarHeight": 10,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipFontFamily": "Georgia",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressOpacity": 1,
  "progressBarBackgroundColor": [
   "#FFCC00"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 15,
  "minHeight": 50,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "toolTipBorderColor": "#767676",
  "borderSize": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "minWidth": 100,
  "height": "100%",
  "playbackBarOpacity": 1,
  "width": "100%",
  "toolTipBackgroundColor": "transparent",
  "playbackBarRight": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderRadius": 3,
  "toolTipPaddingLeft": 6,
  "paddingBottom": 0,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontColor": "#FFFFFF",
  "toolTipShadowBlurRadius": 3,
  "id": "MainViewer",
  "progressBarOpacity": 1,
  "toolTipFontWeight": "bold",
  "playbackBarHeadBorderRadius": 0,
  "progressHeight": 10,
  "toolTipPaddingTop": 4,
  "shadow": false,
  "toolTipOpacity": 1,
  "progressLeft": 0,
  "progressBottom": 0,
  "progressBarBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "borderRadius": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "transitionMode": "blending",
  "paddingLeft": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderColor": "#000000",
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingBottom": 4,
  "toolTipFontSize": 14,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarBorderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingRight": 6,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBorderColor": "#FFFFFF"
 },
 {
  "id": "Container_895BF711_9A76_6A22_41DE_DD790FE9C33F",
  "backgroundColor": [
   "#000000"
  ],
  "backgroundOpacity": 0.3,
  "top": "0%",
  "bottom": "0%",
  "shadow": false,
  "borderRadius": 0,
  "gap": 10,
  "visible": false,
  "backgroundColorRatios": [
   0
  ],
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "id": "Container_96749C53_9A72_E184_41CF_509D109830B8",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "backgroundOpacity": 0.3,
    "top": "12%",
    "bottom": "12%",
    "shadow": false,
    "borderRadius": 0,
    "gap": 10,
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "backgroundOpacity": 1,
      "id": "WebFrame_91AB6CE2_9A72_6284_41C5_DA6BA81B4EE7",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "top": "0%",
      "shadow": false,
      "visible": false,
      "borderRadius": 0,
      "scrollEnabled": false,
      "backgroundColorRatios": [
       0
      ],
      "minHeight": 1,
      "insetBorder": false,
      "paddingLeft": 0,
      "class": "WebFrame",
      "paddingTop": 0,
      "borderSize": 0,
      "width": "100%",
      "minWidth": 1,
      "height": "100%",
      "url": "http://sketchfab.com/models/1ed67d076a474f0b9b2c87d625c389c4/embed\n\n",
      "backgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "paddingRight": 0,
      "left": "0%"
     }
    ],
    "minHeight": 1,
    "paddingLeft": 0,
    "horizontalAlign": "left",
    "class": "Container",
    "paddingTop": 0,
    "borderSize": 0,
    "minWidth": 1,
    "scrollBarMargin": 2,
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "layout": "absolute",
    "backgroundColorDirection": "vertical",
    "contentOpaque": false,
    "verticalAlign": "top",
    "paddingBottom": 0,
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "left": "12%",
    "right": "12%",
    "scrollBarWidth": 10
   }
  ],
  "minHeight": 1,
  "paddingLeft": 0,
  "horizontalAlign": "left",
  "class": "Container",
  "paddingTop": 0,
  "borderSize": 0,
  "minWidth": 1,
  "scrollBarMargin": 2,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "layout": "absolute",
  "backgroundColorDirection": "vertical",
  "contentOpaque": false,
  "verticalAlign": "top",
  "paddingBottom": 0,
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "right": "0%",
  "scrollBarWidth": 10
 }
], 
 "vrPolyfillScale": 0.5,
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "shadow": false,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "registerKey": function(key, value){  window[key] = value; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); }
 },
 "minHeight": 20,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "class": "Player",
 "borderSize": 0,
 "width": "100%",
 "paddingTop": 0,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "layout": "absolute",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "height": "100%",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10
})