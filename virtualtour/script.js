TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987",
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 22,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 2.47,
        "yaw": 118.29,
        "pitch": -6.82
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_A2AC9C45_ACD8_42B1_41E2_CD00F2C59B90, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_A1F8EF11_ACD8_3ED0_41C1_DEEDC780BD39",
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 49,
           "width": 44,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_1_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.47,
        "yaw": 118.29,
        "pitch": -6.82
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 47,
           "width": 46,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.21,
        "yaw": 60.46,
        "pitch": -6.76
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_B87ADAF1_AD48_C750_41DB_D8DCB7D6A764)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_A2D3D03C_ACC8_C2D7_41AF_34E6FD7ACB51",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 95,
           "width": 93,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_2_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.21,
        "yaw": 60.46,
        "pitch": -6.76
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 117,
           "width": 82,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_3_1_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.18,
        "yaw": 60.06,
        "pitch": 5.36
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupMedia(this.window_A2DE6974_ACF8_4557_41DE_10F0399393BC, this.video_A14D8C52_ACF8_4353_41DB_A75FA93B4E89, this.playList_BC3957DA_ACC8_4D53_41E2_58654D1F481C, '40%', '40%', false, true); this.playList_BC3957DA_ACC8_4D53_41E2_58654D1F481C.set('selectedIndex', 0); ; this.viewer_uidBC3AF7DB_ACC8_4D51_41C7_BA437F0E100DVideoPlayer.play(); ",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_A2B16AC9_ACC8_C7B1_41D4_34680D5F4063",
      "rollOverDisplay": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 235,
           "width": 164,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_3_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.18,
        "yaw": 60.06,
        "roll": 0,
        "pitch": 5.36
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 48,
           "width": 79,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_4_1_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.85,
        "yaw": 119.29,
        "pitch": 7.61
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupMedia(this.window_A2B7EDFB_ACF8_5D51_41DB_20003C5B868C, this.video_A1B8D05F_ACF8_C351_41D3_7BD04DB7C68A, this.playList_BC35C7DD_ACC8_4D51_41D9_B802A1E950F1, '40%', '40%', false, true); this.playList_BC35C7DD_ACC8_4D51_41D9_B802A1E950F1.set('selectedIndex', 0); ; this.viewer_uidBC3587DD_ACC8_4D51_41E3_368BFE80DD9CVideoPlayer.play(); ",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_A2FBB47A_ACF8_C353_419F_35A3BFFA5695",
      "rollOverDisplay": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 97,
           "width": 158,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_4_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.85,
        "yaw": 119.29,
        "roll": 0,
        "pitch": 7.61
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 98,
           "width": 114,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_5_1_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.71,
        "yaw": -72.2,
        "pitch": 9.04
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupMedia(this.window_A25F35D6_ACF8_4D50_41A8_8EBCFA19D7FD, this.video_A1B8FEDE_ACF8_DF53_41E3_CC21CCD1D645, this.playList_BC3617DE_ACC8_4D53_41C7_0D973E99860C, '40%', '40%', false, true); this.playList_BC3617DE_ACC8_4D53_41C7_0D973E99860C.set('selectedIndex', 0); ; this.viewer_uidBC36D7DE_ACC8_4D53_41E4_75FE24EC5CEEVideoPlayer.play(); ",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_A23228CF_ACF8_43B1_41D3_7800124F24D3",
      "rollOverDisplay": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 196,
           "width": 228,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_5_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.71,
        "yaw": -72.2,
        "roll": 0,
        "pitch": 9.04
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 67,
           "width": 67,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_6_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.58,
        "yaw": 23.92,
        "pitch": -1.14
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupMedia(this.window_BED1C9EB_ACD8_4571_41E0_BEBE3E5BC896, this.album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3, this.playList_BE9FB132_ACD8_42D3_41BF_8CE72F94E84B, '60%', '60%', false, false); this.playList_BE9FB132_ACD8_42D3_41BF_8CE72F94E84B.set('selectedIndex', 0); ",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_A245BB42_ACF8_46B3_41E4_7C00DAF6AC9A",
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 135,
           "width": 135,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_6_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.58,
        "yaw": 23.92,
        "pitch": -1.14
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 116,
           "width": 61,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_7_1_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.86,
        "yaw": -13.14,
        "pitch": 6
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupMedia(this.window_B8E591C2_ACC8_45B3_41D9_0CDD66A500B8, this.video_A1B8D05F_ACF8_C351_41D3_7BD04DB7C68A, this.playList_B99ACEDD_ACC8_3F51_41AE_C7A52C0541C5, '40%', '40%', false, true); this.playList_B99ACEDD_ACC8_3F51_41AE_C7A52C0541C5.set('selectedIndex', 0); ; this.viewer_uidB9991EDE_ACC8_3F53_41E5_4956600EF071VideoPlayer.play(); ",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_B8906219_ACC8_46D0_41E1_A83484F74399",
      "rollOverDisplay": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 232,
           "width": 122,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_7_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.86,
        "yaw": -13.14,
        "roll": 0,
        "pitch": 6
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 19,
           "width": 16,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_8_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.1,
        "yaw": -39.28,
        "pitch": -4.86
       }
      ],
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3, this.camera_B10A2735_ADC8_4ED1_41DE_C5D6AA3EBE20); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_B5663E4E_AD5B_DEB3_41B4_36A56E91CE14",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 302,
           "width": 252,
           "url": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_0_HS_8_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.1,
        "yaw": -39.28,
        "pitch": -4.86
       }
      ]
     }
    ]
   }
  ],
  "adjacentPanoramas": [
   {
    "backwardYaw": -78.95,
    "class": "AdjacentPanorama",
    "panorama": {
     "id": "panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3",
     "vfov": 180,
     "hfovMin": 60,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3214,
          "width": 6434,
          "url": "media/panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1607,
          "width": 3217,
          "url": "media/panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3.jpeg"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3_t.jpg",
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 117,
              "width": 110,
              "url": "media/panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.6,
           "yaw": -3.28,
           "pitch": -31.12
          }
         ],
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.openLink(\"https://jugalrupela.github.io/portfolio/\", \"_blank\")",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_A2520660_ACC9_CF6F_41A0_9796831D1A2C",
         "rollOverDisplay": false,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 234,
              "width": 221,
              "url": "media/panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3_0_HS_1_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.6,
           "yaw": -3.28,
           "pitch": -31.12
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 185,
              "width": 167,
              "url": "media/panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 18.67,
           "yaw": -78.95,
           "pitch": -2.8
          }
         ],
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987, this.camera_B10FE740_ADC8_4EB0_41E3_1E4A0D04EDFD); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_BFB387B0_ACC8_4DEF_41E5_43619844CA7C",
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 370,
              "width": 334,
              "url": "media/panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3_0_HS_2_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 18.67,
           "yaw": -78.95,
           "pitch": -2.8
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 67,
              "width": 67,
              "url": "media/panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.53,
           "yaw": 73.39,
           "pitch": -6.34
          }
         ],
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupMedia(this.window_BF87A731_ACC8_4ED1_41A1_CEAC2AB7F512, this.video_A14D8C52_ACF8_4353_41DB_A75FA93B4E89, this.playList_B999EEDF_ACC8_3F51_4175_6AD2CE226D2D, '40%', '40%', false, true); this.playList_B999EEDF_ACC8_3F51_4175_6AD2CE226D2D.set('selectedIndex', 0); ; this.viewer_uidB9982EDF_ACC8_3F51_41E2_07FA37E47845VideoPlayer.play(); ",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_BF88EDF8_ACC8_3D5F_41D6_D244FE1612F2",
         "rollOverDisplay": false,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 135,
              "width": 135,
              "url": "media/panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3_0_HS_3_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.53,
           "yaw": 73.39,
           "pitch": -6.34
          }
         ]
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "backwardYaw": -39.28,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987",
       "yaw": -78.95,
       "distance": 1
      }
     ],
     "pitch": 0,
     "class": "Panorama",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3_t.jpg",
     "hfovMax": 120,
     "partial": false,
     "label": "pn-1"
    },
    "yaw": -39.28,
    "distance": 1
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_t.jpg",
  "hfovMax": 120,
  "partial": false,
  "label": "pn-2"
 },
 {
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.15,
   "pitch": -8.96
  },
  "id": "panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  }
 },
 "this.panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  }
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_A14D8C52_ACF8_4353_41DB_A75FA93B4E89_t.jpg",
  "video": {
   "class": "VideoResource",
   "height": 360,
   "mp4Url": "media/video_A14D8C52_ACF8_4353_41DB_A75FA93B4E89.mp4",
   "width": 640
  },
  "label": "italy",
  "width": 640,
  "loop": false,
  "id": "video_A14D8C52_ACF8_4353_41DB_A75FA93B4E89",
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_A1B8FEDE_ACF8_DF53_41E3_CC21CCD1D645_t.jpg",
  "video": {
   "class": "VideoResource",
   "height": 360,
   "mp4Url": "media/video_A1B8FEDE_ACF8_DF53_41E3_CC21CCD1D645.mp4",
   "width": 640
  },
  "label": "landscape",
  "width": 640,
  "loop": false,
  "id": "video_A1B8FEDE_ACF8_DF53_41E3_CC21CCD1D645",
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_A1B8D05F_ACF8_C351_41D3_7BD04DB7C68A_t.jpg",
  "video": {
   "class": "VideoResource",
   "height": 360,
   "mp4Url": "media/video_A1B8D05F_ACF8_C351_41D3_7BD04DB7C68A.mp4",
   "width": 640
  },
  "label": "tour",
  "width": 640,
  "loop": false,
  "id": "video_A1B8D05F_ACF8_C351_41D3_7BD04DB7C68A",
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_BCE42A87_ACF8_C7B1_419F_DB08384A4A9C_t.png",
  "id": "album_BCE42A87_ACF8_C7B1_419F_DB08384A4A9C",
  "label": "Photo Album nature",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_BCE42A87_ACF8_C7B1_419F_DB08384A4A9C_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.66",
       "y": "0.60",
       "zoomFactor": 1.1
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "thumbnailUrl": "media/album_BCE42A87_ACF8_C7B1_419F_DB08384A4A9C_0_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_BCE42A87_ACF8_C7B1_419F_DB08384A4A9C_0.jpg"
        }
       ]
      },
      "id": "album_BCE42A87_ACF8_C7B1_419F_DB08384A4A9C_0",
      "label": "nature",
      "width": 800,
      "height": 1200
     }
    }
   ]
  }
 },
 {
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer"
 },
 "this.album_BCE42A87_ACF8_C7B1_419F_DB08384A4A9C_0",
 {
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3_t.png",
  "id": "album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3",
  "label": "Photo Album Quotefancy-24786-3840x2160",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.35",
       "y": "0.45",
       "zoomFactor": 1.1
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "thumbnailUrl": "media/album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3_0_t.jpg",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3_0.jpg"
        }
       ]
      },
      "id": "album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3_0",
      "label": "Quotefancy-24786-3840x2160",
      "width": 3840,
      "height": 2160
     }
    }
   ]
  }
 },
 "this.album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3_0",
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_A6666DFA_ACC8_DD53_41E0_5FC7A323E987"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_A7810194_ACC8_45D7_41E2_D0E217D1E2E3"
   },
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.video_A14D8C52_ACF8_4353_41DB_A75FA93B4E89",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2, this.video_A14D8C52_ACF8_4353_41DB_A75FA93B4E89)"
   },
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.video_A1B8FEDE_ACF8_DF53_41E3_CC21CCD1D645",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3, this.video_A1B8FEDE_ACF8_DF53_41E3_CC21CCD1D645)"
   },
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.video_A1B8D05F_ACF8_C351_41D3_7BD04DB7C68A",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 4, this.video_A1B8D05F_ACF8_C351_41D3_7BD04DB7C68A)"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.album_BCE42A87_ACF8_C7B1_419F_DB08384A4A9C"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
    "media": "this.album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_BC3957DA_ACC8_4D53_41E2_58654D1F481C",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidBC3AF7DB_ACC8_4D51_41C7_BA437F0E100DVideoPlayer)",
    "media": "this.video_A14D8C52_ACF8_4353_41DB_A75FA93B4E89",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uidBC3AF7DB_ACC8_4D51_41C7_BA437F0E100DVideoPlayer",
     "viewerArea": {
      "playbackBarHeadShadowColor": "#000000",
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
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
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "minHeight": 50,
      "playbackBarProgressBorderColor": "#000000",
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
      "id": "viewer_uidB17EC719_ADC8_4ED1_41E5_978FB26D29F9",
      "progressBarOpacity": 1,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderRadius": 0,
      "progressHeight": 10,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingTop": 4,
      "shadow": false,
      "toolTipOpacity": 1,
      "progressLeft": 0,
      "progressBottom": 2,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "borderRadius": 0,
      "playbackBarHeadOpacity": 1,
      "progressBarBorderSize": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderRadius": 0,
      "progressBorderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressOpacity": 1,
      "transitionMode": "blending",
      "paddingLeft": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontSize": 12,
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
     "displayPlaybackBar": true
    },
    "start": "this.viewer_uidBC3AF7DB_ACC8_4D51_41C7_BA437F0E100DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_BC3957DA_ACC8_4D53_41E2_58654D1F481C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_BC3957DA_ACC8_4D53_41E2_58654D1F481C, 0, this.video_A14D8C52_ACF8_4353_41DB_A75FA93B4E89)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_BC35C7DD_ACC8_4D51_41D9_B802A1E950F1",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidBC3587DD_ACC8_4D51_41E3_368BFE80DD9CVideoPlayer)",
    "media": "this.video_A1B8D05F_ACF8_C351_41D3_7BD04DB7C68A",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uidBC3587DD_ACC8_4D51_41E3_368BFE80DD9CVideoPlayer",
     "viewerArea": {
      "playbackBarHeadShadowColor": "#000000",
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
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
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "minHeight": 50,
      "playbackBarProgressBorderColor": "#000000",
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
      "id": "viewer_uidB17E871A_ADC8_4ED3_41E0_9AE8E389FF89",
      "progressBarOpacity": 1,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderRadius": 0,
      "progressHeight": 10,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingTop": 4,
      "shadow": false,
      "toolTipOpacity": 1,
      "progressLeft": 0,
      "progressBottom": 2,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "borderRadius": 0,
      "playbackBarHeadOpacity": 1,
      "progressBarBorderSize": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderRadius": 0,
      "progressBorderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressOpacity": 1,
      "transitionMode": "blending",
      "paddingLeft": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontSize": 12,
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
     "displayPlaybackBar": true
    },
    "start": "this.viewer_uidBC3587DD_ACC8_4D51_41E3_368BFE80DD9CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_BC35C7DD_ACC8_4D51_41D9_B802A1E950F1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_BC35C7DD_ACC8_4D51_41D9_B802A1E950F1, 0, this.video_A1B8D05F_ACF8_C351_41D3_7BD04DB7C68A)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_BC3617DE_ACC8_4D53_41C7_0D973E99860C",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidBC36D7DE_ACC8_4D53_41E4_75FE24EC5CEEVideoPlayer)",
    "media": "this.video_A1B8FEDE_ACF8_DF53_41E3_CC21CCD1D645",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uidBC36D7DE_ACC8_4D53_41E4_75FE24EC5CEEVideoPlayer",
     "viewerArea": {
      "playbackBarHeadShadowColor": "#000000",
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
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
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "minHeight": 50,
      "playbackBarProgressBorderColor": "#000000",
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
      "id": "viewer_uidB17E471B_ADC8_4ED1_41D0_F86CDDCB5EBE",
      "progressBarOpacity": 1,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderRadius": 0,
      "progressHeight": 10,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingTop": 4,
      "shadow": false,
      "toolTipOpacity": 1,
      "progressLeft": 0,
      "progressBottom": 2,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "borderRadius": 0,
      "playbackBarHeadOpacity": 1,
      "progressBarBorderSize": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderRadius": 0,
      "progressBorderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressOpacity": 1,
      "transitionMode": "blending",
      "paddingLeft": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontSize": 12,
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
     "displayPlaybackBar": true
    },
    "start": "this.viewer_uidBC36D7DE_ACC8_4D53_41E4_75FE24EC5CEEVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_BC3617DE_ACC8_4D53_41C7_0D973E99860C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_BC3617DE_ACC8_4D53_41C7_0D973E99860C, 0, this.video_A1B8FEDE_ACF8_DF53_41E3_CC21CCD1D645)"
   }
  ]
 },
 {
  "change": "this.showComponentsWhileMouseOver(this.container_B17E371C_ADC8_4ED7_41E4_86A321979F5A, [this.htmltext_B171C71C_ADC8_4ED7_41C0_5F05D4F22DA7,this.component_B173D71D_ADC8_4ED1_41D9_3B8153F03FEF,this.component_B173C71D_ADC8_4ED1_41E3_E6F985E7D1C0], 2000)",
  "class": "PlayList",
  "id": "playList_BE9FB132_ACD8_42D3_41BF_8CE72F94E84B",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3_AlbumPlayList, this.htmltext_B171C71C_ADC8_4ED7_41C0_5F05D4F22DA7, this.albumitem_BE9F3133_ACD8_42D1_41DA_D2EE7718E3BF); this.loopAlbum(this.playList_BE9FB132_ACD8_42D3_41BF_8CE72F94E84B, 0)",
    "id": "albumitem_BE9F3133_ACD8_42D1_41DA_D2EE7718E3BF",
    "player": {
     "class": "PhotoAlbumPlayer",
     "id": "viewer_uidBE9F4133_ACD8_42D1_41D9_9610CDC30265PhotoAlbumPlayer",
     "viewerArea": {
      "playbackBarHeadShadowColor": "#000000",
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
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
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "minHeight": 50,
      "playbackBarProgressBorderColor": "#000000",
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
      "id": "viewer_uidB17E171B_ADC8_4ED1_41D6_8AF6A9959052",
      "progressBarOpacity": 1,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderRadius": 0,
      "progressHeight": 10,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingTop": 4,
      "shadow": false,
      "toolTipOpacity": 1,
      "progressLeft": 0,
      "progressBottom": 2,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "borderRadius": 0,
      "playbackBarHeadOpacity": 1,
      "progressBarBorderSize": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderRadius": 0,
      "progressBorderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressOpacity": 1,
      "transitionMode": "blending",
      "paddingLeft": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontSize": 12,
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
     }
    },
    "media": "this.album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_B99ACEDD_ACC8_3F51_41AE_C7A52C0541C5",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidB9991EDE_ACC8_3F53_41E5_4956600EF071VideoPlayer)",
    "media": "this.video_A1B8D05F_ACF8_C351_41D3_7BD04DB7C68A",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uidB9991EDE_ACC8_3F53_41E5_4956600EF071VideoPlayer",
     "viewerArea": {
      "playbackBarHeadShadowColor": "#000000",
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
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
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "minHeight": 50,
      "playbackBarProgressBorderColor": "#000000",
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
      "id": "viewer_uidB173871E_ADC8_4ED3_41E4_915E8872EA1B",
      "progressBarOpacity": 1,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderRadius": 0,
      "progressHeight": 10,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingTop": 4,
      "shadow": false,
      "toolTipOpacity": 1,
      "progressLeft": 0,
      "progressBottom": 2,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "borderRadius": 0,
      "playbackBarHeadOpacity": 1,
      "progressBarBorderSize": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderRadius": 0,
      "progressBorderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressOpacity": 1,
      "transitionMode": "blending",
      "paddingLeft": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontSize": 12,
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
     "displayPlaybackBar": true
    },
    "start": "this.viewer_uidB9991EDE_ACC8_3F53_41E5_4956600EF071VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B99ACEDD_ACC8_3F51_41AE_C7A52C0541C5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B99ACEDD_ACC8_3F51_41AE_C7A52C0541C5, 0, this.video_A1B8D05F_ACF8_C351_41D3_7BD04DB7C68A)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_B999EEDF_ACC8_3F51_4175_6AD2CE226D2D",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidB9982EDF_ACC8_3F51_41E2_07FA37E47845VideoPlayer)",
    "media": "this.video_A14D8C52_ACF8_4353_41DB_A75FA93B4E89",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uidB9982EDF_ACC8_3F51_41E2_07FA37E47845VideoPlayer",
     "viewerArea": {
      "playbackBarHeadShadowColor": "#000000",
      "progressRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
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
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadow": true,
      "minHeight": 50,
      "playbackBarProgressBorderColor": "#000000",
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
      "id": "viewer_uidB173271F_ADC8_4ED1_41C3_C5BFD2326446",
      "progressBarOpacity": 1,
      "toolTipFontWeight": "normal",
      "playbackBarHeadBorderRadius": 0,
      "progressHeight": 10,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipPaddingTop": 4,
      "shadow": false,
      "toolTipOpacity": 1,
      "progressLeft": 0,
      "progressBottom": 2,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "borderRadius": 0,
      "playbackBarHeadOpacity": 1,
      "progressBarBorderSize": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderRadius": 0,
      "progressBorderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressOpacity": 1,
      "transitionMode": "blending",
      "paddingLeft": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontSize": 12,
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
     "displayPlaybackBar": true
    },
    "start": "this.viewer_uidB9982EDF_ACC8_3F51_41E2_07FA37E47845VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B999EEDF_ACC8_3F51_4175_6AD2CE226D2D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B999EEDF_ACC8_3F51_4175_6AD2CE226D2D, 0, this.video_A14D8C52_ACF8_4353_41DB_A75FA93B4E89)"
   }
  ]
 },
 {
  "veilColorDirection": "horizontal",
  "backgroundColor": [],
  "bodyPaddingLeft": 5,
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "modal": true,
  "layout": "horizontal",
  "bodyBackgroundOpacity": 1,
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 12,
  "headerBackgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "bodyPaddingTop": 5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilColorRatios": [
   0,
   0.38,
   1
  ],
  "closeButtonIconColor": "#000000",
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "htmlText_uidB17DF714_ADC8_4ED7_41C5_7AEC678F422B",
    "shadow": false,
    "class": "HTMLText",
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "borderSize": 0,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:29px;font-family:'MS Sans Serif', Geneva, sans-serif;\">Welcome!</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;font-family:'MS Sans Serif', Geneva, sans-serif;\">Hi! I'm Jug and welcome to my virtual tour. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;font-family:'MS Sans Serif', Geneva, sans-serif;\">Please enjoy your time and do not miss out on interactive spots (good luck finding all).</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;font-family:'MS Sans Serif', Geneva, sans-serif;\">P.s. Every painting has a story.</SPAN></SPAN></DIV></div>",
    "minWidth": 0,
    "scrollBarMargin": 2,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "100%",
    "paddingBottom": 10,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10
   }
  ],
  "title": "",
  "minHeight": 20,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontFamily": "Lucida Sans Unicode",
  "titleFontWeight": "bold",
  "paddingTop": 0,
  "borderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "width": 400,
  "closeButtonIconWidth": 12,
  "height": 350,
  "headerPaddingTop": 10,
  "closeButtonPaddingLeft": 0,
  "minWidth": 20,
  "scrollBarMargin": 2,
  "shadowColor": "#000000",
  "shadowHorizontalLength": 3,
  "backgroundColorDirection": "vertical",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "overflow": "scroll",
  "paddingBottom": 0,
  "paddingRight": 0,
  "headerPaddingRight": 10,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "shadowSpread": 1,
  "headerBorderSize": 0,
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonPaddingRight": 0,
  "scrollBarWidth": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "id": "window_A2AC9C45_ACD8_42B1_41E2_CD00F2C59B90",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "backgroundOpacity": 1,
  "closeButtonPaddingTop": 0,
  "gap": 10,
  "shadow": true,
  "bodyPaddingBottom": 5,
  "titleFontStyle": "normal",
  "bodyBorderColor": "#000000",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "borderRadius": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarVisible": "rollOver",
  "backgroundColorRatios": [],
  "veilOpacity": 0.4,
  "headerBackgroundOpacity": 1,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundColorRatios": [],
  "titlePaddingTop": 5,
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontColor": "#000000",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "headerPaddingLeft": 10,
  "horizontalAlign": "center",
  "closeButtonBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowBlurRadius": 6,
  "headerPaddingBottom": 10,
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleTextDecoration": "none",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundColorDirection": "vertical",
  "titleFontSize": 32,
  "contentOpaque": false,
  "veilColor": [
   "#000000",
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerVerticalAlign": "middle",
  "bodyBorderSize": 0,
  "closeButtonBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "closeButtonBorderSize": 0,
  "headerBorderColor": "#000000",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingBottom": 0
 },
 {
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_B87ADAF1_AD48_C750_41DB_D8DCB7D6A764.mp3",
   "oggUrl": "media/audio_B87ADAF1_AD48_C750_41DB_D8DCB7D6A764.ogg"
  },
  "autoplay": true,
  "id": "audio_B87ADAF1_AD48_C750_41DB_D8DCB7D6A764"
 },
 {
  "veilColorDirection": "horizontal",
  "closeButtonPressedIconLineWidth": 3,
  "backgroundColor": [],
  "bodyPaddingLeft": 5,
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "modal": true,
  "layout": "vertical",
  "bodyBackgroundOpacity": 1,
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 12,
  "headerBackgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "bodyPaddingTop": 5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilColorRatios": [
   0,
   0.38,
   1
  ],
  "closeButtonIconColor": "#000000",
  "children": [
   "this.viewer_uidB17EC719_ADC8_4ED1_41E5_978FB26D29F9"
  ],
  "title": "Wonders of Italy.",
  "minHeight": 20,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontFamily": "Lucida Sans Unicode",
  "titleFontWeight": "bold",
  "paddingTop": 0,
  "borderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "headerPaddingTop": 10,
  "closeButtonIconWidth": 12,
  "scrollBarMargin": 2,
  "closeButtonPaddingLeft": 0,
  "minWidth": 20,
  "overflow": "scroll",
  "shadowHorizontalLength": 3,
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
  "headerPaddingRight": 10,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "shadowSpread": 1,
  "closeButtonPaddingRight": 0,
  "backgroundOpacity": 1,
  "scrollBarWidth": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "id": "window_A2DE6974_ACF8_4557_41DE_10F0399393BC",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingTop": 0,
  "gap": 10,
  "shadow": true,
  "bodyPaddingBottom": 5,
  "titleFontStyle": "normal",
  "bodyBorderColor": "#000000",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "borderRadius": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarVisible": "rollOver",
  "backgroundColorRatios": [],
  "headerBackgroundOpacity": 1,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundColorRatios": [],
  "veilOpacity": 0.4,
  "titlePaddingTop": 5,
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontColor": "#000000",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "headerPaddingLeft": 10,
  "horizontalAlign": "center",
  "closeButtonBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "close": "this.playList_BC3957DA_ACC8_4D53_41E2_58654D1F481C.set('selectedIndex', -1);",
  "shadowBlurRadius": 6,
  "headerPaddingBottom": 10,
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleTextDecoration": "none",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundColorDirection": "vertical",
  "titleFontSize": 32,
  "contentOpaque": false,
  "veilColor": [
   "#000000",
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerVerticalAlign": "middle",
  "bodyBorderSize": 0,
  "closeButtonBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "closeButtonBorderSize": 0,
  "headerBorderColor": "#000000",
  "footerBackgroundOpacity": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingBottom": 0
 },
 {
  "veilColorDirection": "horizontal",
  "closeButtonPressedIconLineWidth": 3,
  "backgroundColor": [],
  "bodyPaddingLeft": 5,
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "modal": true,
  "layout": "vertical",
  "bodyBackgroundOpacity": 1,
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 12,
  "headerBackgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "bodyPaddingTop": 5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilColorRatios": [
   0,
   0.38,
   1
  ],
  "closeButtonIconColor": "#000000",
  "children": [
   "this.viewer_uidB17E871A_ADC8_4ED3_41E0_9AE8E389FF89"
  ],
  "title": "",
  "minHeight": 20,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontFamily": "Lucida Sans Unicode",
  "titleFontWeight": "bold",
  "paddingTop": 0,
  "borderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "headerPaddingTop": 10,
  "closeButtonIconWidth": 12,
  "scrollBarMargin": 2,
  "closeButtonPaddingLeft": 0,
  "minWidth": 20,
  "overflow": "scroll",
  "shadowHorizontalLength": 3,
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
  "headerPaddingRight": 10,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "shadowSpread": 1,
  "closeButtonPaddingRight": 0,
  "backgroundOpacity": 1,
  "scrollBarWidth": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "id": "window_A2B7EDFB_ACF8_5D51_41DB_20003C5B868C",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingTop": 0,
  "gap": 10,
  "shadow": true,
  "bodyPaddingBottom": 5,
  "titleFontStyle": "normal",
  "bodyBorderColor": "#000000",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "borderRadius": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarVisible": "rollOver",
  "backgroundColorRatios": [],
  "headerBackgroundOpacity": 1,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundColorRatios": [],
  "veilOpacity": 0.4,
  "titlePaddingTop": 5,
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontColor": "#000000",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "headerPaddingLeft": 10,
  "horizontalAlign": "center",
  "closeButtonBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "close": "this.playList_BC35C7DD_ACC8_4D51_41D9_B802A1E950F1.set('selectedIndex', -1);",
  "shadowBlurRadius": 6,
  "headerPaddingBottom": 10,
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleTextDecoration": "none",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundColorDirection": "vertical",
  "titleFontSize": 32,
  "contentOpaque": false,
  "veilColor": [
   "#000000",
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerVerticalAlign": "middle",
  "bodyBorderSize": 0,
  "closeButtonBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "closeButtonBorderSize": 0,
  "headerBorderColor": "#000000",
  "footerBackgroundOpacity": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingBottom": 0
 },
 {
  "veilColorDirection": "horizontal",
  "closeButtonPressedIconLineWidth": 3,
  "backgroundColor": [],
  "bodyPaddingLeft": 5,
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "modal": true,
  "layout": "vertical",
  "bodyBackgroundOpacity": 1,
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 12,
  "headerBackgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "bodyPaddingTop": 5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilColorRatios": [
   0,
   0.38,
   1
  ],
  "closeButtonIconColor": "#000000",
  "children": [
   "this.viewer_uidB17E471B_ADC8_4ED1_41D0_F86CDDCB5EBE"
  ],
  "title": "",
  "minHeight": 20,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontFamily": "Lucida Sans Unicode",
  "titleFontWeight": "bold",
  "paddingTop": 0,
  "borderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "headerPaddingTop": 10,
  "closeButtonIconWidth": 12,
  "scrollBarMargin": 2,
  "closeButtonPaddingLeft": 0,
  "minWidth": 20,
  "overflow": "scroll",
  "shadowHorizontalLength": 3,
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
  "headerPaddingRight": 10,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "shadowSpread": 1,
  "closeButtonPaddingRight": 0,
  "backgroundOpacity": 1,
  "scrollBarWidth": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "id": "window_A25F35D6_ACF8_4D50_41A8_8EBCFA19D7FD",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingTop": 0,
  "gap": 10,
  "shadow": true,
  "bodyPaddingBottom": 5,
  "titleFontStyle": "normal",
  "bodyBorderColor": "#000000",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "borderRadius": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarVisible": "rollOver",
  "backgroundColorRatios": [],
  "headerBackgroundOpacity": 1,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundColorRatios": [],
  "veilOpacity": 0.4,
  "titlePaddingTop": 5,
  "paddingLeft": 0,
  "footerHeight": 5,
  "titleFontColor": "#000000",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "headerPaddingLeft": 10,
  "horizontalAlign": "center",
  "closeButtonBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "close": "this.playList_BC3617DE_ACC8_4D53_41C7_0D973E99860C.set('selectedIndex', -1);",
  "shadowBlurRadius": 6,
  "headerPaddingBottom": 10,
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleTextDecoration": "none",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "closeButtonBackgroundColorDirection": "vertical",
  "titleFontSize": 32,
  "contentOpaque": false,
  "veilColor": [
   "#000000",
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerVerticalAlign": "middle",
  "bodyBorderSize": 0,
  "closeButtonBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "closeButtonBorderSize": 0,
  "headerBorderColor": "#000000",
  "footerBackgroundOpacity": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingBottom": 0
 },
 {
  "veilColorDirection": "horizontal",
  "closeButtonPressedIconLineWidth": 3,
  "backgroundColor": [],
  "bodyPaddingLeft": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "modal": true,
  "layout": "vertical",
  "bodyBackgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 12,
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "veilColorRatios": [
   0,
   0.38,
   1
  ],
  "closeButtonIconColor": "#000000",
  "children": [
   {
    "backgroundOpacity": 0.3,
    "id": "container_B17E371C_ADC8_4ED7_41E4_86A321979F5A",
    "backgroundColor": [],
    "shadow": false,
    "layout": "absolute",
    "class": "Container",
    "borderRadius": 0,
    "gap": 10,
    "backgroundColorRatios": [],
    "scrollBarVisible": "rollOver",
    "children": [
     "this.viewer_uidB17E171B_ADC8_4ED1_41D6_8AF6A9959052",
     {
      "backgroundColor": [],
      "backgroundOpacity": 0.3,
      "bottom": 0,
      "shadow": false,
      "layout": "vertical",
      "class": "Container",
      "borderRadius": 0,
      "gap": 10,
      "backgroundColorRatios": [],
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "backgroundOpacity": 0.7,
        "id": "htmltext_B171C71C_ADC8_4ED7_41C0_5F05D4F22DA7",
        "backgroundColor": [
         "#000000"
        ],
        "shadow": false,
        "visible": false,
        "class": "HTMLText",
        "borderRadius": 0,
        "backgroundColorRatios": [
         0
        ],
        "scrollBarVisible": "rollOver",
        "minHeight": 0,
        "paddingLeft": 10,
        "hideEffect": {
         "duration": 250,
         "class": "FadeOutEffect",
         "easing": "cubic_in_out"
        },
        "paddingTop": 5,
        "borderSize": 0,
        "html": "",
        "minWidth": 0,
        "scrollBarMargin": 2,
        "width": "100%",
        "scrollBarColor": "#000000",
        "showEffect": {
         "duration": 250,
         "class": "FadeInEffect",
         "easing": "cubic_in_out"
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
      "paddingTop": 0,
      "borderSize": 0,
      "minWidth": 20,
      "scrollBarMargin": 2,
      "scrollBarColor": "#FFFFFF",
      "overflow": "scroll",
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
      "id": "component_B173D71D_ADC8_4ED1_41D9_3B8153F03FEF",
      "top": "45%",
      "mode": "push",
      "shadow": false,
      "iconURL": "skin/album_left.png",
      "visible": false,
      "class": "IconButton",
      "borderRadius": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3_AlbumPlayList, -1)",
      "minHeight": 0,
      "paddingLeft": 0,
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "horizontalAlign": "center",
      "paddingTop": 0,
      "borderSize": 0,
      "minWidth": 0,
      "cursor": "hand",
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "paddingRight": 0,
      "left": 10,
      "transparencyActive": false
     },
     {
      "backgroundOpacity": 0,
      "id": "component_B173C71D_ADC8_4ED1_41E3_E6F985E7D1C0",
      "mode": "push",
      "shadow": false,
      "iconURL": "skin/album_right.png",
      "visible": false,
      "class": "IconButton",
      "borderRadius": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_BD4845EC_ACD8_4D77_41C5_2794AD7A1EF3_AlbumPlayList, 1)",
      "minHeight": 0,
      "paddingLeft": 0,
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "horizontalAlign": "center",
      "paddingTop": 0,
      "borderSize": 0,
      "minWidth": 0,
      "cursor": "hand",
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
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
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "minWidth": 20,
    "scrollBarMargin": 2,
    "scrollBarColor": "#000000",
    "overflow": "scroll",
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
  "title": "",
  "minHeight": 20,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontFamily": "Lucida Sans Unicode",
  "titleFontWeight": "bold",
  "paddingTop": 0,
  "borderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 5,
  "headerPaddingTop": 10,
  "closeButtonIconWidth": 12,
  "scrollBarMargin": 2,
  "closeButtonPaddingLeft": 0,
  "minWidth": 20,
  "overflow": "scroll",
  "shadowHorizontalLength": 3,
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
  "headerPaddingRight": 10,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "shadowSpread": 1,
  "closeButtonPaddingRight": 0,
  "backgroundOpacity": 1,
  "scrollBarWidth": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "id": "window_BED1C9EB_ACD8_4571_41E0_BEBE3E5BC896",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingTop": 0,
  "gap": 10,
  "shadow": true,
  "bodyPaddingBottom": 5,
  "titleFontStyle": "normal",
  "bodyBorderColor": "#000000",
  "titlePaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "borderRadius": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "scrollBarVisible": "rollOver",
  "backgroundColorRatios": [],
  "headerBackgroundOpacity": 1,
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
  "closeButtonBackgroundOpacity": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingRight": 5,
  "close": "this.playList_BE9FB132_ACD8_42D3_41BF_8CE72F94E84B.set('selectedIndex', -1);",
  "shadowBlurRadius": 6,
  "headerPaddingBottom": 10,
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleTextDecoration": "none",
  "veilColor": [
   "#000000",
   "#000000",
   "#000000"
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "titleFontSize": 32,
  "contentOpaque": false,
  "verticalAlign": "middle",
  "headerVerticalAlign": "middle",
  "bodyBorderSize": 0,
  "closeButtonBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "closeButtonBorderSize": 0,
  "headerBorderColor": "#000000",
  "footerBackgroundOpacity": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingBottom": 0
 },
 {
  "veilColorDirection": "horizontal",
  "closeButtonPressedIconLineWidth": 3,
  "backgroundColor": [],
  "bodyPaddingLeft": 0,
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "modal": true,
  "layout": "vertical",
  "bodyBackgroundOpacity": 0,
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 20,
  "headerBackgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
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
   "this.viewer_uidB173871E_ADC8_4ED3_41E4_915E8872EA1B"
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
  "shadowHorizontalLength": 3,
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
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "shadowSpread": 1,
  "backgroundOpacity": 1,
  "scrollBarWidth": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "id": "window_B8E591C2_ACC8_45B3_41D9_0CDD66A500B8",
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
  "class": "Window",
  "borderRadius": 5,
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
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "headerPaddingLeft": 10,
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "close": "this.playList_B99ACEDD_ACC8_3F51_41AE_C7A52C0541C5.set('selectedIndex', -1);",
  "shadowBlurRadius": 6,
  "headerPaddingBottom": 5,
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleTextDecoration": "none",
  "closeButtonPressedBackgroundColor": [],
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
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
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "modal": true,
  "layout": "vertical",
  "bodyBackgroundOpacity": 0,
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 20,
  "headerBackgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
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
   "this.viewer_uidB173271F_ADC8_4ED1_41C3_C5BFD2326446"
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
  "shadowHorizontalLength": 3,
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
  "titlePaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "shadowSpread": 1,
  "backgroundOpacity": 1,
  "scrollBarWidth": 10,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "id": "window_BF87A731_ACC8_4ED1_41A1_CEAC2AB7F512",
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
  "class": "Window",
  "borderRadius": 5,
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
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "headerPaddingLeft": 10,
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "close": "this.playList_B999EEDF_ACC8_3F51_4175_6AD2CE226D2D.set('selectedIndex', -1);",
  "shadowBlurRadius": 6,
  "headerPaddingBottom": 5,
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "titleTextDecoration": "none",
  "closeButtonPressedBackgroundColor": [],
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
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
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 101.05,
   "pitch": 0
  },
  "id": "camera_B10A2735_ADC8_4ED1_41DE_C5D6AA3EBE20",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 140.72,
   "pitch": 0
  },
  "id": "camera_B10FE740_ADC8_4EB0_41E3_1E4A0D04EDFD",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  }
 },
 {
  "class": "PanoramaAudio",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_A263A2BB_ACC8_47D1_41DA_2CD3C0250830.mp3",
   "oggUrl": "media/audio_A263A2BB_ACC8_47D1_41DA_2CD3C0250830.ogg"
  },
  "autoplay": true,
  "id": "audio_A263A2BB_ACC8_47D1_41DA_2CD3C0250830"
 },
 {
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_A27FFCA8_ACC8_43FF_41E2_8874DD8019E3.mp3",
   "oggUrl": "media/audio_A27FFCA8_ACC8_43FF_41E2_8874DD8019E3.ogg"
  },
  "autoplay": true,
  "id": "audio_A27FFCA8_ACC8_43FF_41E2_8874DD8019E3"
 },
 {
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_BADAE5DC_AD48_4D57_41DD_882842EF1A79.mp3",
   "oggUrl": "media/audio_BADAE5DC_AD48_4D57_41DD_882842EF1A79.ogg"
  },
  "autoplay": true,
  "id": "audio_BADAE5DC_AD48_4D57_41DD_882842EF1A79"
 }
], "children": [
 {
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
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
   "#3399FF"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "minHeight": 50,
  "playbackBarProgressBorderColor": "#000000",
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
  "id": "MainViewer",
  "progressBarOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarHeadBorderRadius": 0,
  "progressHeight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipPaddingTop": 4,
  "shadow": false,
  "toolTipOpacity": 0.66,
  "progressLeft": 0,
  "progressBottom": 0,
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "borderRadius": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "transitionMode": "blending",
  "paddingLeft": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontSize": 12,
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
  "pressedIconWidth": 40,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontWeight": "normal",
  "fontColor": "#FFFFFF",
  "toolTipBorderSize": 1,
  "toolTipShadowBlurRadius": 3,
  "id": "Button_B45B76AC_AD58_CFF7_41E2_A872CF104862",
  "iconBeforeLabel": true,
  "toolTipShadowColor": "#333333",
  "backgroundOpacity": 0,
  "textDecoration": "none",
  "mode": "toggle",
  "iconWidth": 40,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "bottom": "3.53%",
  "toolTipFontStyle": "normal",
  "shadow": false,
  "iconURL": "skin/Button_B45B76AC_AD58_CFF7_41E2_A872CF104862.png",
  "layout": "horizontal",
  "toolTipFontFamily": "Arial",
  "toolTipOpacity": 0.66,
  "class": "Button",
  "borderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "fontFamily": "Arial",
  "iconHeight": 40,
  "toolTipPaddingTop": 4,
  "backgroundColorRatios": [
   0,
   1
  ],
  "pressedIconURL": "skin/Button_B45B76AC_AD58_CFF7_41E2_A872CF104862_pressed.png",
  "pressedIconHeight": 40,
  "gap": 0,
  "minHeight": 0,
  "fontWeight": "normal",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "borderColor": "#000000",
  "paddingTop": 0,
  "borderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "width": 113,
  "toolTipPaddingBottom": 4,
  "toolTipBorderColor": "#767676",
  "minWidth": 0,
  "height": 108,
  "fontSize": 12,
  "pressedBackgroundOpacity": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontSize": 12,
  "toolTip": "Mute Audio",
  "cursor": "hand",
  "shadowColor": "#000000",
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "fontStyle": "normal",
  "rollOverBackgroundOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipTextShadowOpacity": 0,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "paddingRight": 0,
  "toolTipShadowSpread": 0,
  "toolTipBorderRadius": 3,
  "toolTipShadowOpacity": 1,
  "toolTipPaddingRight": 6,
  "rollOverIconHeight": 40,
  "right": "2.12%",
  "shadowSpread": 1,
  "rollOverIconWidth": 40,
  "toolTipFontColor": "#606060"
 }
], 
 "vrPolyfillScale": 0.5,
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "shadow": false,
 "layout": "absolute",
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "scripts": {
  "unregisterKey": function(key){  delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "getKey": function(key){  return window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "registerKey": function(key, value){  window[key] = value; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "minHeight": 20,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "buttonToggleMute": "this.Button_B45B76AC_AD58_CFF7_41E2_A872CF104862",
 "borderSize": 0,
 "width": "100%",
 "paddingTop": 0,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "start": "this.playAudioList([this.audio_BADAE5DC_AD48_4D57_41DD_882842EF1A79]); this.mainPlayList.set('selectedIndex', 0)",
 "height": "100%",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10
})