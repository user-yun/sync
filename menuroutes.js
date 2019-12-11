import Main from "@/views/welcome/Main.vue";
export default function () {
    let r = [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/welcome/Home.vue'),
            meta: {
                intercept: true,//是否需要拦截
                role: [1, 999]//角色
            },
        },
        {
            path: '/home',
            name: 'home',
            component: Main,
            meta: {
                icon: "el-icon-house",//图标
                intercept: true,//是否需要拦截
                noKeepAlive: true,
                role: [1, 999]//角色
            },
            children: [
                {
                    path: '/home',
                    name: 'home',
                    redirect: { name: "home" },
                    meta: {
                        icon: "el-icon-house",
                        intercept: true,
                        noKeepAlive: true,
                        role: [1, 999]
                    }
                }
            ]
        },
        {
            path: '/test',
            name: 'test',
            component: Main,
            meta: {
                icon: "el-icon-sugar",
                intercept: true,
                noKeepAlive: true,
                role: [1, 999]
            },
            children: [
                {
                    path: '/test',
                    name: 'test',
                    component: () => import('#/test/Test.vue'),
                    meta: {
                        icon: "el-icon-sugar",
                        intercept: true,
                        noKeepAlive: true,
                        role: [1, 999]
                    }
                }
            ]
        },
        {
            path: '/system',
            name: 'system',
            component: Main,
            meta: {
                icon: "el-icon-s-platform",
                intercept: true,
                role: [1]
            },
            children: [
                {
                    path: '/device',
                    name: 'device',
                    component: () => import('#/system/device/MDevice'),
                    meta: {
                        icon: "el-icon-odometer",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/business',
                    name: 'business',
                    component: () => import('#/system/business/MBusiness'),
                    meta: {
                        icon: "el-icon-tickets",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/organization',
                    name: 'organization',
                    component: () => import('#/system/orghistory/MOrgHistory'),
                    meta: {
                        icon: "el-icon-s-check",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/bill',
                    name: 'bill',
                    component: () => import('#/system/bill/MBill'),
                    meta: {
                        icon: "el-icon-s-order",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/enterpriseSummary',
                    name: 'enterpriseSummary',
                    component: () => import('#/system/orgsummary/MOrgSummary'),
                    meta: {
                        icon: "el-icon-s-order",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/regionalSummary',
                    name: 'regionalSummary',
                    component: () => import('#/system/zonesummary/MZoneSummary'),
                    meta: {
                        icon: "el-icon-s-order",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/module',
                    name: 'module',
                    component: () => import('#/system/module/MModule'),
                    meta: {
                        icon: "el-icon-s-order",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/region',
                    name: 'region',
                    component: () => import('#/system/zonesummary/MZoneList'),
                    meta: {
                        icon: "el-icon-s-order",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/publicBooth',
                    name: 'publicBooth',
                    component: () => import('#/system/publicbooth/MPublicBooth'),
                    meta: {
                        icon: "el-icon-s-order",
                        intercept: true,
                        role: [1]
                    }
                }
            ]
        },
        {
            path: '/config',
            name: 'config',
            component: Main,
            meta: {
                icon: "el-icon-s-help",
                intercept: true,
                role: [1]
            },
            children: [
                {
                    path: '/publicBoothConfig',
                    name: 'publicBoothConfig',
                    component: () => import('#/config/publicboothconfig/MPublicBoothConfig'),
                    meta: {
                        icon: "el-icon-s-help",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/groRbtConfig',
                    name: 'groRbtConfig',
                    component: () => import('#/config/grorbtconfig/MGroRbtConfig'),
                    meta: {
                        icon: "el-icon-s-help",
                        intercept: true,
                        role: [1]
                    }
                }
            ]
        },
        {
            path: '/create',
            name: 'create',
            component: Main,
            meta: {
                icon: "el-icon-s-help",
                intercept: true,
                role: [1]
            },
            children: [
                {
                    path: '/crGeTaPuBo',
                    name: 'crGeTaPuBo',
                    component: () => import('#/create/crgetapubo/MCrGeTaPuBo'),
                    meta: {
                        icon: "el-icon-s-help",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/crInTaPuBo',
                    name: 'crInTaPuBo',
                    component: () => import('#/create/crintapubo/MCrInTaPuBo'),
                    meta: {
                        icon: "el-icon-s-help",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/crModuRela',
                    name: 'crModuRela',
                    component: () => import('#/create/crmodurela/MCrModuRela'),
                    meta: {
                        icon: "el-icon-s-help",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/crdevrelacorr',
                    name: 'crdevrelacorr',
                    component: () => import('#/create/crdevrelacorr/MCrDevRelaCorr'),
                    meta: {
                        icon: "el-icon-s-help",
                        intercept: true,
                        role: [1]
                    }
                }
            ]
        },
        {
            path: '/docking',
            name: 'docking',
            component: Main,
            meta: {
                icon: "el-icon-sugar",
                intercept: true,
                role: [1]
            },
            children: [
                {
                    path: '/hosDock',
                    name: 'hosDock',
                    component: () => import('#/docking/hosdock/MHosDock.vue'),
                    meta: {
                        icon: "el-icon-sugar",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/enterpDock',
                    name: 'enterpDock',
                    component: () => import('#/docking/enterpdock/MEnterpDock.vue'),
                    meta: {
                        icon: "el-icon-sugar",
                        intercept: true,
                        role: [1]
                    }
                }
            ]
        },
        {
            path: '/billrechargemanagement',
            name: 'billrechargemanagement',
            component: Main,
            meta: {
                icon: "el-icon-sugar",
                intercept: true,
                role: [1]
            },
            children: [
                {
                    path: '/accountsReceivable',
                    name: 'accountsReceivable',
                    component: () => import('#/billrechargemanagement/accountsreceivable/AccountsReceivable.vue'),
                    meta: {
                        icon: "el-icon-sugar",
                        intercept: true,
                        role: [1]
                    }
                },
                {
                    path: '/closedBills',
                    name: 'closedBills',
                    component: () => import('#/billrechargemanagement/closedbills/ClosedBills.vue'),
                    meta: {
                        icon: "el-icon-sugar",
                        intercept: true,
                        role: [1]
                    }
                }
            ]
        },
    ]
    return r;
}