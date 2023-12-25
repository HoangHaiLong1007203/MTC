import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, ImageBackground } from "react-native";
import styles from '../styles/style2';
import Detail from './Detail';
import Rating from './Rating';
import ChapList from './ChapList';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const type='Khoa Huyễn';
const namebook='Nghiệp Dư Thần Linh: Ta Có Thể Vượt Qua Không Gian';
const author='Đại Lực Bảo';
const cvt='ConverterName';
const rate=4.5;
const ratenum=10;
const chap=2;
const update=1;
const status='Đang ra';
const view=100;

const BButton= ({img,name})=>{
    return(
    <TouchableOpacity style={{alignItems:'center'}} >
        <Image style={{width:40,height:40}}  source={img}/>
        <Text style={{fontSize:17,margin:10}} >
            {name}
        </Text>
    </TouchableOpacity>
    )
}
export default function ChapContent(){
    return(
    <View style={{flex:1,marginTop:20}} >
        <ScrollView  style={{padding:10}} >
            <Text style={{fontSize:16}} >
                Đều nói trên người mỗi một người đều sẽ có một ít cố sự, bất luận yêu hận tình cừu vẫn là bi hoan hỉ lạc.
                {'\n\n'}
                Nhưng Trang Hồng cho là mình trên người không cái gì cố sự.
                {'\n\n'}
                Hắn ở cô nhi viện lớn lên, ấn tượng duy nhất chính là ngồi ở sân trên bậc thang, nhìn trong sân cây cỏ sinh sôi héo quắt, cũng hoặc là ngồi ở trong góc lật xem những kia ố vàng khuyết trang thư tịch.
                {'\n\n'}
                Cũng bởi vậy, hắn thích đọc sách, cũng thích lẳng lặng nghe người khác giảng chuyện xưa của bọn họ, sau đó dùng tâm nhớ ở trên sổ tay.
                {'\n\n'}
                Dù cho cố sự này có chút không hợp thói thường, dù cho kể chuyện xưa người tương đối đặc biệt.
                {'\n\n'}
                Nói thí dụ như, một tên xuyên việt giả.
                {'\n\n'}
                Hiện tại, Trang Hồng đối diện ngồi một cái xuyên việt giả, khóc ròng ròng giảng giải thuộc về hắn xuyên qua cố sự.
                {'\n\n'}
                Mà Trang Hồng tắc dụng tâm đem chuyện xưa của hắn viết ở trên sổ tay.
                {'\n\n'}
                Người "xuyên việt" này tên là Từ Khải Đông, xuyên qua đến cái này tương tự Tống triều thời đại, cũng ở đây sinh hoạt hai mươi năm, hiện tại ba mươi lăm tuổi.
                {'\n\n'}
                Hắn mới vừa xuyên qua mà đến thời điểm, còn là một mười lăm tuổi thiếu niên, hăng hái chỉ điểm sơn hà, dựa vào vượt mức quy định tư tưởng cùng ánh mắt, cùng với sao sao sao, ngăn ngắn hai mươi năm gian, trở thành thế giới này có tài hoa nhất người, bị tôn xưng là trên đời Thánh nhân.
                {'\n\n'}
                Hắn là vô số thiếu nữ thiếu phụ bà lão tình nhân trong mộng, chỉ cần hắn gật đầu, vô số xinh đẹp như hoa đem ùa lên, đồng ý vì hắn thị tẩm làm ấm giường sinh oa, liền ngay cả hoàng đế cũng ngưỡng mộ tài hoa của hắn, ngoại lệ cho hắn phong tôn quý vô cùng khác họ vương, vinh hoa một đời. . .
                {'\n\n'}
                Đơn giản tới nói, hắn đã tới kiếp trước kiếp này gộp lại nhân sinh đỉnh phong.
                {'\n\n'}
                Trên mặt Trang Hồng treo thời gian dài giấc ngủ không đủ phù phiếm, sắc mặt xem ra có chút buồn ngủ, nhưng sáng sủa hai mắt tràn ngập tò mò, hắn vừa nghe vừa nhớ, trong lòng vô cùng ước ao: "Thực sự là muôn màu muôn vẻ nhân sinh trải qua."
                {'\n\n'}
                Chỉ có điều, Từ Khải Đông giảng giải cố sự thời điểm, tình chỗ sâu nhất, nước mắt giàn giụa, thậm chí tóm chặt lấy Trang Hồng tay không nguyện thả ra.
                {'\n\n'}
                Trang Hồng: "Từ tiên sinh, mặc dù cao hứng, cũng không cần cùng ta lằng nhà lằng nhằng, kính xin buông tay."
                {'\n\n'}
                Từ Khải Đông khóc rống nói: "Trang tiên sinh, ta đây không phải cao hứng, mà là bi thương. Ta có thể sao thơ ca đã sớm sao xong, ta vượt mức quy định tư tưởng cũng tất cả đều nói xong, liền ngay cả duy nhất có thể nhớ tới trung học cơ sở vật lý toán học đều run lên cái không còn một mống, ta hiện tại trong bụng đã không có hàng, mà tất cả mọi người đều đang chờ ta tân học thuyết. Nguy a!"
                {'\n\n'}
                Trang Hồng kinh ngạc nói: "Nhiều đồ như vậy, ngươi đều run xong?"
                {'\n\n'}
                Từ Khải Đông lúng túng nói: "Có lúc nhất thời hưng khởi, nói tới thật nhiều, hơn nữa ta đánh giá cao trí nhớ của ta, mới vừa xuyên qua thời điểm không đúng lúc ghi nhớ, sau đó từ từ đã quên. Trang tiên sinh, có thể hay không mang ta về Địa cầu? Yên tâm, sau khi trở về ta cái gì cũng không nói."
                {'\n\n'}
                Trang Hồng lắc đầu nói: "Ta chỉ là một cái phổ thông không gian người lữ hành, ngẫu nhiên đi ngang qua nơi này đụng tới ngươi, không có năng lực mang ngươi trở về. Bất quá ngươi nếu là muốn mang lời gì cho để ý nhất người, ta ngược lại thật ra có thể hỗ trợ, đương nhiên, tiền đề là ta có thể tìm tới."
                {'\n\n'}
                "Lưu ý người? Ai, không cái gì lưu ý người, cũng sẽ không có người lưu ý ta. . ."
                {'\n\n'}
                Nghĩ, Từ Khải Đông ánh mắt sáng lên: "Đúng rồi, Trang tiên sinh có thể giúp ta mang một quyển sách lại đây sao? Còn có điện thoại di động máy vi tính loại hình."
                {'\n\n'}
                "Một quyển sách lời nói, ngược lại có thể, nhiều hơn nữa liền không được rồi."
                {'\n\n'}
                Từ Khải Đông đại hỉ: "Một quyển sách cũng có thể, ta muốn. . . Toán học đại toàn, toán học là tất cả khoa học căn bản, ta muốn làm thế giới này vĩ đại nhất nhà toán học."
                {'\n\n'}
                Trang Hồng ngừng bút, khép lại notebook nói: "Có thể, bất quá không phải không công hỗ trợ, muốn dùng trên người ngươi một cái vật phẩm trao đổi."
                {'\n\n'}
                "Món đồ gì?"
                {'\n\n'}
                Trang Hồng chỉ chỉ trên đầu hắn ngà voi đai lưng: "Hay dùng con này ngà voi đai lưng đi."
                {'\n\n'}
                Từ Khải Đông thoải mái nói: "Thành giao, ha ha!"
                {'\n\n'}
                "Kia Từ tiên sinh trước tiên chờ ta mấy ngày, mấy ngày sau tự sẽ mang theo thư tịch tìm đến ngươi."
                {'\n\n'}
                Nói xong, Trang Hồng vác lên hai vai bao, đứng dậy rời đi, đi tới đi tới, bóng dáng từ từ trở thành nhạt, cuối cùng biến mất không còn tăm tích.
                {'\n\n'}
                Kiên trì chờ đợi hồi lâu, xác nhận Trang Hồng đi rồi, Từ Khải Đông không nhịn được đem trên đầu ngà voi cột tóc lấy xuống, thả ở trong tay tỉ mỉ.
                {'\n\n'}
                "Hắn muốn cái cột tóc này làm cái gì? Chẳng lẽ có bí mật gì?"
                {'\n\n'}
                Sau đó hắn bắt đầu rồi một loạt nhỏ máu nhận chủ thao tác, ý đồ đào móc bí mật trong đó.
                {'\n\n'}
                . . .
                {'\n\n'}
                Cùng Từ Khải Đông cáo biệt sau, Trang Hồng chậm rãi bước quá không gian bình phong, đi đến một thế giới khác.
                {'\n\n'}
                Bước chân của hắn không có dừng lại, đi rồi một lúc, bóng dáng lại chậm rãi biến mất, xuất hiện tại một không gian khác.
                {'\n\n'}
                Liền như vậy, hắn không nhanh không chậm cất bước, xuyên qua một cái lại một cái không giống không gian ba chiều, bước qua một cái lại một cái thế giới khác nhau, hướng về Địa cầu vị trí mà đi.
                {'\n\n'}
                Trang Hồng là một cái không gian người lữ hành, có thể dường như bốn chiều sinh vật bình thường, ở mỗi cái không giống không gian ba chiều tùy ý qua lại.
                {'\n\n'}
                Gặp phải không giống người, nghe không giống cố sự, tránh né thiên địch, cùng với tìm kiếm Dinh dưỡng .
                {'\n\n'}
                Cái gọi là thiên địch, chính là một ít đồng dạng có thể tùy ý qua lại không gian kỳ lạ sinh vật.
                {'\n\n'}
                Những sinh vật kỳ lạ này phảng phất bị trên người Trang Hồng một loại nào đó đặc chất hấp dẫn, chỉ cần đụng với sẽ đối Trang Hồng triển khai điên cuồng săn giết, thật giống như đem hắn nuốt vào sau, có thể thu được lợi ích cực kỳ lớn.
                {'\n\n'}
                Chúng nó là vì số không nhiều có thể uy hiếp Trang Hồng sinh mệnh kẻ địch, không biết lúc nào sẽ xuất hiện, cũng không biết từ đâu triển khai công kích, để Trang Hồng vô cùng e dè, cũng phiền phức vô cùng. Liền ngủ đều không được an ổn, cho tới thường thường giấc ngủ không đủ, hai cái vành mắt khác nào gấu trúc.
                {'\n\n'}
                Cũng bởi vậy, Trang Hồng thông thường sẽ không ở cùng một nơi đợi lâu, mà là ở mỗi cái thế giới ở giữa du tẩu, để tránh khỏi hấp dẫn quá nhiều thiên địch mà vô lực ứng phó.
                {'\n\n'}
                Đương nhiên, những thiên địch này cũng không hoàn toàn vô dụng nơi, chúng nó có thể cho Trang Hồng cung cấp phong phú Dinh dưỡng, để hắn thu được sức mạnh mạnh hơn.
                {'\n\n'}
                . . .
                {'\n\n'}
                Trang Hồng xuyên qua mỗi cái thế giới, vừa đi vừa nghỉ, thưởng thức ven đường cảnh tượng, gặp phải mỹ cảnh còn có thể móc ra notebook miêu tả một phen.
                {'\n\n'}
                Không biết qua bao lâu, mãnh liệt cơn buồn ngủ vọt tới, hắn đánh một cái to lớn ngáp, thuận thế tựa ở một cây đại thụ dưới, dùng notebook che ở trên mặt, ở giữa hè ve kêu bên trong, nhắm mắt lại chợp mắt.
                {'\n\n'}
                Nhưng mà hắn mới vừa nằm xuống không lâu, liền nếu có điều cảm giác thức tỉnh, đầu bỗng nhiên thiên hướng một bên, miễn cưỡng tránh thoát một cái từ hư không đột ngột dò ra đỏ sẫm xúc tu.
                {'\n\n'}
                Trên xúc tu nằm dày đặc đỏ sẫm vảy, đỉnh cái kia sắc bén lăng đâm toả ra thăm thẳm ánh sáng lộng lẫy.
                {'\n\n'}
                Như vậy xúc tu không phải một cái, mà là mấy chục cây.
                {'\n\n'}
                Ở Trang Hồng tránh thoát đòn thứ nhất sau, lập tức bắn lên, lại có đại lượng xúc tu từ mỗi cái góc độ khởi xướng mau lẹ mà dày đặc công kích.
                {'\n\n'}
                "Phốc phốc phốc ~ "
                {'\n\n'}
                Trang Hồng thân hình trái phải xê dịch, nhanh chóng lui về phía sau, miễn cưỡng tránh thoát xúc tu công kích.
                {'\n\n'}
                Chỉ cần chậm hơn mảy may, sợ là cũng bị xuyên thành tổ ong.
                {'\n\n'}
                Xúc tu theo sát không nghỉ, liên tiếp xúc tu thân thể cũng từ trong hư không chui ra, lộ ra toàn cảnh.
                {'\n\n'}
                Đây là một cái màu đỏ sậm hình cầu, đủ có đầu xe tải to nhỏ, hình cầu trên có bốn con màu lam mắt kép, nhìn chăm chú Trang Hồng, mà xúc tu chính là từ hình cầu các cái vị trí duỗi ra, dường như một cái to lớn nhím biển.
                {'\n\n'}
                Trang Hồng xưng là Hồng tu quái .
                {'\n\n'}
                Nhìn thấy con quái vật này, Trang Hồng không chỉ có không có một tia kinh hoảng, khóe miệng trái lại móc lên nụ cười nhạt.
                {'\n\n'}
                "Cái đầu không nhỏ, nhưng mà chỉ là cấp thấp nhất màu trắng thiên địch."
                {'\n\n'}
                Trang Hồng đặc biệt tầm nhìn có thể nhìn thấu thiên địch trong cơ thể nguyên lực, mà bất đồng đẳng cấp nguyên lực, sẽ toả ra không giống nhan sắc, thực lực từ nhược đến cường lần lượt là màu trắng, màu lục, màu lam.
                {'\n\n'}
                Trong cơ thể chính hắn nguyên lực liền toả ra xanh mượt nhan sắc.
                {'\n\n'}
                Đến mức lam quang bên trên sẽ là màu gì, hắn còn chưa từng gặp, tạm thời không biết được.
                {'\n\n'}
                Mà con này hồng tu quái trong cơ thể toả ra nhàn nhạt bạch quang, thuộc về Màu trắng thiên địch, bị Trang Hồng về là Không hề uy hiếp một loại.
                {'\n\n'}
                Trang Hồng trái phải xê dịch, ung dung né tránh lui về phía sau, đột nhiên hai tay mười ngón tay xòe ra, bỗng nhiên lôi kéo, hồng tu quái đại lượng xúc tu nhất thời khép lại lên, ngưng tụ thành một chùm.
                {'\n\n'}
                Lúc này mới phát hiện, trên xúc tu chẳng biết lúc nào dĩ nhiên quấn lấy lít nha lít nhít tia nhỏ, mà những tia nhỏ này cuối cùng tất cả đều liền ở Trang Hồng trên ngón tay.
                {'\n\n'}
                "Oành!" 
                {'\n\n'}
                Hồng tu quái thân thể khổng lồ mất đi xúc tu chống đỡ, ngã xuống đất, điên cuồng giãy dụa.
                {'\n\n'}
                Trang Hồng tay phải hư nắm.
                {'\n\n'}
                "Két kèn kẹt ~ "
                {'\n\n'}
                Đỏ sậm giáp xác từ trong tay hắn tăng sinh, hóa thành một cái thật dài gai nhọn, nhắm ngay hồng tu quái.
                {'\n\n'}
                Bắn ra !
                {'\n\n'}
                Gai nhọn hóa thành một vệt sáng bắn vào hồng tu quái trong cơ thể.
                {'\n\n'}
                "Ca!"
                {'\n\n'}
                Một tiếng vang giòn, hồng tu quái co giật một hồi, không động đậy nữa.
                {'\n\n'}
                Chiến đấu kết thúc.
                {'\n\n'}
                Trang Hồng tản đi tia nhỏ, chậm rãi tiến lên.
                {'\n\n'}
                Trong thân thể tùy theo tuôn ra một luồng mãnh liệt ăn cơm dục vọng, để hắn buồn ngủ tinh thần đều tỉnh táo không ít.
                {'\n\n'}
                "Ăn cơm rồi!"
                {'\n\n'}
                Hắn đưa tay cắm vào hồng tu quái trong cơ thể, dừng lại một lát sau, cánh tay giống như một cái ống hút vậy, điên cuồng hấp thụ nguyên lực cùng dinh dưỡng.
                {'\n\n'}
                Cỗ lớn cỗ lớn dinh dưỡng, theo cánh tay tràn vào trong cơ thể, để hắn thu được thân thể cùng tinh thần song trọng thỏa mãn.
                {'\n\n'}
                To lớn hồng tu quái mắt trần có thể thấy khô héo héo rút.
                {'\n\n'}
                Mà Trang Hồng thân thể lại như cùng một cái động không đáy, không có rõ ràng biến hóa, chỉ có cái bụng hơi nhô lên.
                {'\n\n'}
                Ở hồng tu quái bị hút khô sau, hắn không nhịn được ợ một tiếng no nê.
                {'\n\n'}
                Lại từ hồng tu quái thể xác lật trong ra một ít tinh thể mảnh vỡ, vỗ vỗ phía trên bụi bặm, trực tiếp vứt vào trong miệng, Răng rắc răng rắc ăn lên.
                {'\n\n'}
                Cùng khi còn bé ăn kẹo gần như.
                {'\n\n'}
                . . .
                {'\n\n'}
                
            </Text>
            <View style={[styles.row,{flex:1,marginTop:20,marginBottom:20,justifyContent:'space-around'}]} >
                <BButton img={require('../icon/flower.png')} name='Đề cử'/>
                <BButton img={require('../icon/gift.png')} name='Tặng quà'/>
                <BButton img={require('../icon/thank.png')} name='Cảm xúc'/>
                <BButton img={require('../icon/point.png')} name='Chấm điểm'/>
            </View>
        </ScrollView>
    </View>
    )
}