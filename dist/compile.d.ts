import defaultOverrides from './data/default-overrides.json';
export declare type OverrideToken = {
    color?: string;
    isCurated?: boolean;
    isVerified?: boolean;
    name?: string;
    symbol?: string;
    shadowColor?: string;
};
export declare const getOverrides: () => Promise<{
    eth: {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd": {
        color: string;
        isCurated: boolean;
        name: string;
        symbol: string;
    };
    "0xE41d2489571d322189246DaFA5ebDe1F4699F498": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x111111111117dc0aa78b770fa6a738034120c302": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9": {
        color: string;
        isCurated: boolean; /**
         * Each override is indexed by its address, i.e.:
         *
         * { '0x123...': { color: ... }, ... }
         */
        name: string;
        symbol: string;
    };
    "0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xE1BA0FB44CCb0D11b80F92f4f8Ed94CA3fF51D00": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x6Ee0f7BB50a54AB5253dA0667B0Dc2ee526C30a8": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x712DB54daA836B53Ef1EcBb9c6ba3b9Efb073F40": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x9D91BE44C06d373a8a226E1f3b146956083803eB": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x7D2D3688Df45Ce7C552E19c27e007673da9204B8": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x6FCE4A401B6B80ACe52baAefE4421Bd188e76F6f": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x7deB5e830be29F91E298ba5FF1356BB7f8146998": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x69948cC03f478B95283F7dbf1CE764d0fc7EC54C": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x71010A9D003445aC60C4e6A7017c1E89A477B438": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x625aE63000f46200499120B906716420bd059240": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x4DA9b813057D04BAef4e5800E36083717b4a0341": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xB124541127A0A657f056D9Dd06188c4F1b0e5aab": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x9bA00D6856a4eDF4665BcA2C2309936572473B7E": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x71fc860F7D3A592A4a98740e39dB31d25db65ae8": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xFC4B8ED459e00e5400be803A9BB3954234FD50e3": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x12e51E77DAAA58aA0E9247db7510Ea4B46F9bEAd": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x6Fb0855c404E09c47C3fBCA25f08d4E41f9F062f": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xA361718326c15715591c299427c62086F69923D9": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x028171bCA77440897B824Ca71D1c56caC55b68A3": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xa685a61171bb30d4072B338c80Cb7b2c865c873E": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xc713e5E149D5D0715DcD1c156a020976e7E56B88": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x6C5024Cd4F8A59110119C56f8933403A539555EB": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x101cc05f4A51C0319f570d5E146a8C625198e636": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xBcca60bB61934080951369a648Fb03DF4F96263C": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x5165d24277cD063F5ac44Efd447B27025e888f37": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xff20817765cb7f73d4bde2e66e067e58d11095c2": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xd46ba6d942050d489dbd938a2c909a5d5039a161": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xa117000000f279d81a1d3cc75430faa017fa5a2e": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x221657776846890989a759BA2973e427DfF5C9bB": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xba100000625a3754423978a60c9317c58a424e3d": {
        isCurated: boolean;
        name: string;
        symbol: string;
    };
    "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x68a118ef45063051eac49c7e647ce5ace48a68a5": {
        color: string;
        isCurated: boolean;
        name: string;
        symbol: string;
    };
    "0x0D8775F648430679A709E98d2b0Cb6250d2887EF": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x107c4504cd79C5d2696Ea0030a8dD4e92601B82e": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x514910771AF9Ca656af840dff83E8264EcF986CA": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x41e5560054824eA6B0732E656E3Ad64E20e94E45": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xc00e94cb662c3520282e6f5717214004a7f26888": {
        color: string;
        isCurated: boolean;
        name: string;
        shadowColor: string;
    };
    "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e": {
        color: string;
        isCurated: boolean;
        name: string;
        symbol: string;
    };
    "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643": {
        color: string;
        isCurated: boolean;
        name: string;
        symbol: string;
    };
    "0xF5DCe57282A584D2746FaF1593d3121Fcac444dC": {
        color: string;
        name: string;
        symbol: string;
    };
    "0x39aa39c021dfbae8fac545936693ac917d5e7563": {
        color: string;
        isCurated: boolean;
        name: string;
        symbol: string;
    };
    "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4": {
        color: string;
        isCurated: boolean;
        name: string;
        symbol: string;
    };
    "0xD533a949740bb3306d119CC777fa900bA034cd52": {
        isCurated: boolean;
        name: string;
        symbol: string;
    };
    "0xB4272071eCAdd69d933AdcD19cA99fe80664fc08": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x6b175474e89094c44da98b954eedeac495271d0f": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03": {
        color: string;
        name: string;
        symbol: string;
    };
    "0x956f47f50a910163d8bf957cf5846d573e7f87ca": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x4946Fcea7C692606e8908002e55A582af44AC121": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8": {
        isCurated: boolean;
        isVerified: boolean;
        name: string;
        symbol: string;
    };
    "0x7d91e637589ec3bb54d8213a9e92dc6e8d12da91": {
        isVerified: boolean;
        name: string;
        symbol: string;
    };
    "0x493c57c4763932315a328269e1adad09653b9081": {
        color: string;
        name: string;
        symbol: string;
    };
    "0x14094949152eddbfcd073717200da82fed8dc960": {
        color: string;
        name: string;
        symbol: string;
    };
    "0xf013406a0b1d544238083df0b93ad0d2cbe0f65f": {
        color: string;
        name: string;
        symbol: string;
    };
    "0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x6810e776880C02933D47DB1b9fc05908e5386b96": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xa74476443119A942dE498590Fe1f2454d7D4aC0d": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xc944e90c64b2c07662a292be6244bdf05cda44a7": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x12B19D3e2ccc14Da04FAe33e63652ce469b3F2FD": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39": {
        color: string;
        isCurated: boolean;
        name: string;
        shadowColor: string;
    };
    "0x6c6EE5e31d828De241282B9606C8e98Ea48526E2": {
        color: string;
        isCurated: boolean;
        name: string;
        symbol: string;
    };
    "0x607F4C5BB672230e8672085532f7e901544a7375": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x0954906da0bf32d5479e25f46056d22f08464cab": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xfa5047c9c78b8877af97bdcb85db743fd7313d4a": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xdd974D5C2e2928deA5F71b9825b8b646686BD200": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x58b6A8A3302369DAEc383334672404Ee733aB239": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x45804880de22913dafe09f4980848ece6ecbaf78": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x8E870D67F660D95d5be530380D0eC0bd388289E1": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xe3818504c1b32bf1557b16c238b2e01fd3149c17": {
        color: string;
        name: string;
    };
    "0x6758B7d441a9739b98552B373703d8d3d14f9e62": {
        color: string;
        isCurated: boolean;
        name: string;
        symbol: string;
    };
    "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x49d716dfe60b37379010a75329ae09428f17118d": {
        color: string;
        name: string;
    };
    "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919": {
        color: string;
        isCurated: boolean;
        name: string;
        shadowColor: string;
    };
    "0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xfca59cd816ab1ead66534d82bc21e7515ce441cf": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x408e41876cCCDC0F92210600ef50372656052a38": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xB4EFd85c19999D84251304bDA99E90B92300Bd93": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359": {
        color: string;
        name: string;
        symbol: string;
    };
    "0x06f65b8cfcb13a9fe37d836fe9708da38ecb29b2": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x4156D3342D5c385a87D264F90653733592000581": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x42d6622deCe394b54999Fbd73D108123806f6a18": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84": {
        color: string;
        isCurated: boolean;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x744d70FDBE2Ba4CF95131626614a1763DF805B9E": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x57ab1ec28d129707052df4df418d58a2d46d5f51": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xdac17f958d2ee523a2206206994597c13d831ec7": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x0000000000085d4780b73119b644ae5ecd22b376": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x4c19596f5aaff459fa38b0f7ed92f11ae6543784": {
        name: string;
        symbol: string;
    };
    "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984": {
        color: string;
        isCurated: boolean;
        name: string;
        shadowColor: string;
    };
    "0x23B608675a2B2fB1890d3ABBd85c5775c51691d5": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x09fE5f0236F0Ea5D930197DCE254d77B04128075": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
        color: string;
        name: string;
    };
    "0x5dbcf33d8c2e976c6b560249878e6f1491bca25c": {
        color: string;
        name: string;
        isCurated: boolean;
        symbol: string;
    };
    "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e": {
        color: string;
        isCurated: boolean;
        name: string;
    };
    "0x0aacfbec6a24756c20d41914f2caba817c0d8521": {
        color: string;
        isCurated: boolean;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x0e2298E3B3390e3b945a5456fBf59eCc3f55DA16": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
    "0x69bbc3f8787d573f1bbdd0a5f40c7ba0aee9bcc9": {
        color: string;
        name: string;
        shadowColor: string;
        symbol: string;
    };
}>;
export { defaultOverrides };
