import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

const Box = () => (
    <SafeAreaView>
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ ...styles.heading }}>TÌM KIẾM PHỔ BIẾN</Text>
                <Text style={{ ...styles.seeMore }}>Xem thêm</Text>
            </View>
        </View>
        <View>
            <View style={styles.box}>
                <View style={styles.product}>
                    <View>
                        <Text>Tai-nghe Bluetooth </Text>
                        <Text>172K+ sản phẩm</Text>
                    </View>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://www.sony.com.vn/image/caf15b5628303708b232ddb41ec10825?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
                        }}
                    />
                </View>

                <View style={styles.product}>
                    <View>
                        <Text>Sandal nữ</Text>
                        <Text>335+ sản phẩm </Text>
                    </View>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://salt.tikicdn.com/cache/w444/ts/product/d6/c9/77/04ba7ec50354ebe3aebfee06d8265165.jpg',
                        }}
                    />
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.product}>
                    <View>
                        <Text>Sữa rửa mặt</Text>
                        <Text>252K+ sản phẩm</Text>
                    </View>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://adminbeauty.hvnet.vn/Upload/Files/srm-greentea.jpg',
                        }}
                    />
                </View>

                <View style={styles.product}>
                    <View>
                        <Text>Áo phông</Text>
                        <Text>402k+ sản phẩm</Text>
                    </View>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://lh3.googleusercontent.com/proxy/4dTw3ifXLfpLxV6TjfBjGf3gHzAE9I2eWGLR7sYIRgTUQd9rgo8ctiOQ0an2OYKFvPPdy7q_09jWC32gHcC63ZC4hKouX8g1Km2IwGxIQUHZ_i4H0zcHloarHuiH3CZMz03LHvD4gUDUDgDk7BxXAy3G2HueWcqcl03d5w',
                        }}
                    />
                </View>
            </View>
        </View>
    </SafeAreaView>
);

const styles = ({
    heading: {
        textAlign: 'left',
        marginVertical: 8,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'orange',
    },
    seeMore: {
        textAlign: 'left',
        marginVertical: 10,
        fontWeight: 'normal',
        fontSize: 16,
        color: 'orange',
    },
    product: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: 'orange',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        flexDirection: 'row',
        display: 'flex',
        height: 100,
    },
    images: {
        width: 70,
        height: 70,
    }
});
export default Box;
