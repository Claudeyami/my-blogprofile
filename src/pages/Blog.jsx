import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const location = useLocation();

  // Check for post ID in URL query params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const postId = searchParams.get('id');
    if (postId) {
      setSelectedPost(parseInt(postId));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.search]);

  // Scroll to top when post changes
  useEffect(() => {
    if (selectedPost) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPost]);

  // Function to render content with formatted code blocks
  const renderContent = (content) => {
    const parts = content.split('```');
    
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        // This is a code block
        const lines = part.split('\n');
        const language = lines[0].trim();
        const code = lines.slice(1).join('\n');
        
        return (
          <div key={index} style={{
            backgroundColor: '#1e293b',
            borderRadius: '12px',
            padding: '20px',
            margin: '24px 0',
            border: '1px solid #334155',
            overflow: 'auto'
          }}>
            {language && (
              <div style={{
                color: '#94a3b8',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {language}
              </div>
            )}
            <pre style={{
              margin: 0,
              fontFamily: "'Fira Code', 'Courier New', monospace",
              fontSize: '14px',
              lineHeight: '1.6',
              color: '#e2e8f0',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}>
              <code>{code}</code>
            </pre>
          </div>
        );
      } else {
        // Regular text - parse for ### headers and ** bold
        return (
          <div key={index}>
            {part.split('\n').map((line, lineIndex) => {
              // Check for ### headers
              if (line.startsWith('### ')) {
                return (
                  <h3 key={lineIndex} style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginTop: '32px',
                    marginBottom: '16px'
                  }}>
                    {line.replace('### ', '')}
                  </h3>
                );
              }
              
              // Parse line for inline code (`) and bold text (**)
              const parseInlineFormatting = (text) => {
                const elements = [];
                let currentText = text;
                let key = 0;

                while (currentText.length > 0) {
                  // Check for inline code first
                  const codeMatch = currentText.match(/`([^`]+)`/);
                  const boldMatch = currentText.match(/\*\*([^*]+)\*\*/);

                  // Determine which comes first
                  let nextMatch = null;
                  let type = null;

                  if (codeMatch && boldMatch) {
                    if (currentText.indexOf(codeMatch[0]) < currentText.indexOf(boldMatch[0])) {
                      nextMatch = codeMatch;
                      type = 'code';
                    } else {
                      nextMatch = boldMatch;
                      type = 'bold';
                    }
                  } else if (codeMatch) {
                    nextMatch = codeMatch;
                    type = 'code';
                  } else if (boldMatch) {
                    nextMatch = boldMatch;
                    type = 'bold';
                  }

                  if (nextMatch) {
                    const beforeMatch = currentText.substring(0, currentText.indexOf(nextMatch[0]));
                    if (beforeMatch) {
                      elements.push(<span key={key++}>{beforeMatch}</span>);
                    }

                    if (type === 'code') {
                      elements.push(
                        <code key={key++} style={{
                          backgroundColor: '#f1f5f9',
                          color: '#dc2626',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontSize: '14px',
                          fontFamily: "'Fira Code', 'Courier New', monospace"
                        }}>
                          {nextMatch[1]}
                        </code>
                      );
                    } else {
                      elements.push(
                        <strong key={key++} style={{ fontWeight: '700', color: '#1e293b' }}>
                          {nextMatch[1]}
                        </strong>
                      );
                    }

                    currentText = currentText.substring(currentText.indexOf(nextMatch[0]) + nextMatch[0].length);
                  } else {
                    elements.push(<span key={key++}>{currentText}</span>);
                    break;
                  }
                }

                return elements.length > 0 ? elements : text;
              };

              // Regular paragraph
              if (line.trim()) {
                return (
                  <p key={lineIndex} style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#334155',
                    marginBottom: '16px'
                  }}>
                    {parseInlineFormatting(line)}
                  </p>
                );
              }
              return null;
            })}
          </div>
        );
      }
    });
  };

  const blogPosts = [
    {
      id: 1,
      title: 'var, let và const – Câu chuyện 3 thế hệ trong JavaScript',
      category: 'JavaScript',
      date: '22 Oct 2025',
      readTime: '5 phút',
      excerpt: 'Ngày xưa, JavaScript chỉ có var, và cả thế giới dev phải chịu đựng hàng ngàn bug khó hiểu. Rồi let và const ra đời (ES6), cứu rỗi nhân loại...',
      content: `
Ngày xưa, JavaScript chỉ có \`var\`, và cả thế giới dev phải chịu đựng hàng ngàn bug khó hiểu chỉ vì nó.
Rồi \`let\` và \`const\` ra đời (ES6), cứu rỗi nhân loại. Nếu \`var\` là "ông chú lộn xộn", thì \`let\` là "anh trai cẩn thận" còn \`const\` là "đứa em nguyên tắc".

### Ví dụ kinh điển:

\`\`\`javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// 3 3 3 😭 (vì var global)

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// 0 1 2 ✅
\`\`\`

### So sánh nhanh:

* **var**: function scope, hoisting, dễ gây bug.
* **let**: block scope, an toàn hơn.
* **const**: bất biến, cực hợp cho config và object tĩnh.

### Bài học dev:
"Nếu không muốn bug, hãy const. Nếu thật sự cần thay đổi, hãy let. Còn var… hãy để nó yên nghỉ." ☠️
      `
    },
    {
      id: 2,
      title: 'Arrow Function vs Regular Function – Khi JavaScript học viết tắt',
      category: 'JavaScript',
      date: '20 Oct 2025',
      readTime: '6 phút',
      excerpt: 'Arrow function (=>) xuất hiện và dev khắp thế giới như được khai sáng: "Trời ơi, code ngắn mà chạy được nè!"',
      content: `
Arrow function (\`=>\`) xuất hiện và dev khắp thế giới như được khai sáng:
"Trời ơi, code ngắn mà chạy được nè!"

### So sánh cú pháp:

\`\`\`javascript
// Regular
function hello(name) {
  return "Xin chào " + name;
}

// Arrow
const hello = name => \`Xin chào \${name}\`;
\`\`\`

Ngắn gọn, dễ đọc, nhưng cẩn thận: **Arrow function không có \`this\` riêng!**

### Ví dụ về this:

\`\`\`javascript
function Cat() {
  this.age = 0;
  setInterval(() => this.age++, 1000);
}
\`\`\`

Ở đây \`this\` trỏ tới Cat vì arrow "mượn" \`this\` của phạm vi ngoài.
Tuyệt vời khi làm việc trong React hoặc callback, nhưng **đừng dùng arrow trong object method** – bạn sẽ tự bắn vào chân mình 🤕

### Kinh nghiệm xương máu:
Arrow function giúp bạn code nhanh, nhưng hiểu "this" mới giúp bạn code đúng.
      `
    },
    {
      id: 3,
      title: 'Closure – Khi hàm có trí nhớ 🧠',
      category: 'JavaScript',
      date: '18 Oct 2025',
      readTime: '8 phút',
      excerpt: 'Closure là lý do khiến JavaScript vừa mạnh vừa "ma mị". Một hàm có thể nhớ biến bên ngoài nó, ngay cả khi hàm cha đã chạy xong!',
      content: `
Closure là lý do khiến JavaScript vừa mạnh vừa "ma mị".
Một hàm có thể *nhớ* biến bên ngoài nó, ngay cả khi hàm cha đã chạy xong!

### Ví dụ cơ bản:

\`\`\`javascript
function counter() {
  let count = 0;
  return () => ++count;
}

const click = counter();
console.log(click()); // 1
console.log(click()); // 2
\`\`\`

Biến \`count\` không biến mất vì closure giữ nó lại – như một "não phụ" cho hàm con.

### Ứng dụng closure:

* Tạo **private variable**
* Giảm **global variable**
* Dùng trong **React hook** hoặc **debounce**

### Kết luận:
😄 Đừng ngạc nhiên nếu bạn thấy closure trong mọi thư viện JS bạn yêu thích — nó giống như linh hồn của ngôn ngữ vậy.
      `
    },
    {
      id: 4,
      title: 'Event Loop – Trái tim bất đồng bộ của JavaScript',
      category: 'JavaScript',
      date: '16 Oct 2025',
      readTime: '10 phút',
      excerpt: 'Bạn từng gặp dòng log "xuất hiện lộn xộn" mà không hiểu tại sao chưa? Chào mừng đến Event Loop, hệ thống khiến JS "đa nhiệm" dù chỉ có một luồng.',
      content: `
Bạn từng gặp dòng log "xuất hiện lộn xộn" mà không hiểu tại sao chưa?
Chào mừng đến **Event Loop**, hệ thống khiến JS "đa nhiệm" dù chỉ có một luồng.

### Ví dụ kinh điển:

\`\`\`javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// Output: A → C → B
\`\`\`

### Cách hoạt động:

JavaScript chạy theo thứ tự: **Call Stack → Callback Queue → Event Loop**.
Các lệnh đồng bộ chạy trước, bất đồng bộ (như \`setTimeout\`, \`fetch\`) đợi Event Loop "rảnh" mới nhảy vào.

### Các thành phần:

1. **Call Stack**: Nơi thực thi code đồng bộ
2. **Web APIs**: Xử lý setTimeout, fetch, DOM events
3. **Task Queue**: Hàng đợi callback
4. **Microtask Queue**: Ưu tiên cao hơn (Promise)

### Kết luận:
🧩 Hiểu được Event Loop, bạn hiểu được JavaScript.
Và khi ai đó nói "JS đơn luồng mà chạy đa nhiệm", bạn có quyền mỉm cười tinh tế 😏.
      `
    },
    {
      id: 5,
      title: 'ES6 Modules – Khi JavaScript học cách "sống gọn gàng"',
      category: 'JavaScript',
      date: '14 Oct 2025',
      readTime: '7 phút',
      excerpt: 'Ngày xưa, tất cả code nhét vào một file app.js – bug một cái là cả web nổ tung 💣. ES6 Modules đến, mang lại "hạnh phúc chia sẻ" cho dev toàn cầu.',
      content: `
Ngày xưa, tất cả code nhét vào một file \`app.js\` – bug một cái là cả web nổ tung 💣.
ES6 Modules đến, mang lại "hạnh phúc chia sẻ" cho dev toàn cầu.

### Cách sử dụng:

\`\`\`javascript
// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14;

// main.js
import { add, PI } from './math.js';
console.log(add(3, 4)); // 7
console.log(PI); // 3.14
\`\`\`

### Các cách export/import:

\`\`\`javascript
// Named export
export { add, subtract };

// Default export
export default class Calculator {}

// Import all
import * as Math from './math.js';
\`\`\`

### Lợi ích:

💡 **Lợi ích:** tái sử dụng, bảo trì dễ hơn, build nhanh hơn.

### Mẹo vui:
🧠 Dev chia module như dọn nhà – đừng để tất cả logic chồng chất trong \`index.js\`, trông rất… đau đầu.
      `
    },
    {
      id: 6,
      title: 'Async/Await – Lập trình bất đồng bộ "sạch sẽ"',
      category: 'JavaScript',
      date: '12 Oct 2025',
      readTime: '9 phút',
      excerpt: 'Trước ES8, chúng ta sống trong "địa ngục callback". Rồi async/await ra đời, và mọi thứ trở nên thanh thoát.',
      content: `
Trước ES8, chúng ta sống trong "địa ngục callback":

\`\`\`javascript
getData(() => getMore(() => done()));
\`\`\`

😵‍💫 Rồi \`async/await\` ra đời, và mọi thứ trở nên thanh thoát.

### Cú pháp mới:

\`\`\`javascript
async function fetchData() {
  const res = await fetch('https://api.example.com');
  const data = await res.json();
  console.log(data);
}
\`\`\`

Đọc từ trên xuống, dễ hiểu, không cần \`.then()\` chồng chất.

### Xử lý lỗi:

\`\`\`javascript
async function getData() {
  try {
    const res = await fetch('/api');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Lỗi:', error);
  }
}
\`\`\`

### Chạy song song:

\`\`\`javascript
// Chạy tuần tự (chậm)
const a = await fetch('/api1');
const b = await fetch('/api2');

// Chạy song song (nhanh)
const [a, b] = await Promise.all([
  fetch('/api1'),
  fetch('/api2')
]);
\`\`\`

### Mẹo nhỏ:
💬 Dùng \`try...catch\` để bắt lỗi async.
Code đẹp không chỉ khiến dev khác dễ đọc — mà còn khiến chính bạn đỡ stress 😌.
      `
    },
    {
      id: 7,
      title: 'Exception Handling – Khi lỗi không còn là "kẻ thù"',
      category: 'Java',
      date: '10 Oct 2025',
      readTime: '7 phút',
      excerpt: 'Không có lập trình nào không lỗi. Nhưng thay vì để app sập, Java cho bạn công cụ "hòa giải" với lỗi – try/catch/finally.',
      content: `
Không có lập trình nào không lỗi.
Nhưng thay vì để app sập, Java cho bạn công cụ "hòa giải" với lỗi – \`try/catch/finally\`.

### Cú pháp cơ bản:

\`\`\`java
try {
    int a = 5 / 0;
} catch (ArithmeticException e) {
    System.out.println("Oops! Lỗi chia cho 0 rồi!");
} finally {
    System.out.println("Dọn dẹp tài nguyên...");
}
\`\`\`

### Các loại Exception:

1. **Checked Exception**: Phải xử lý (IOException, SQLException)
2. **Unchecked Exception**: Runtime (NullPointerException, IndexOutOfBounds)
3. **Error**: Lỗi hệ thống (OutOfMemoryError)

### Tạo Custom Exception:

\`\`\`java
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public void checkAge(int age) throws InvalidAgeException {
    if (age < 18) {
        throw new InvalidAgeException("Tuổi phải >= 18");
    }
}
\`\`\`

### Best Practices:

💡 **Tip:** tạo custom Exception để code "nói chuyện" rõ ràng hơn.

Khi bạn biết kiểm soát lỗi, bạn không còn sợ bug – bạn "thương lượng" với nó 😎.
      `
    },
    {
      id: 8,
      title: 'Stream API – Khi Java học cách "ngắn mà chất"',
      category: 'Java',
      date: '8 Oct 2025',
      readTime: '9 phút',
      excerpt: 'Trước Java 8, ta viết vòng lặp for dài ngoằng chỉ để lọc danh sách. Giờ thì chỉ cần vài dòng Stream là xong.',
      content: `
Trước Java 8, ta viết vòng lặp for dài ngoằng chỉ để lọc danh sách.
Giờ thì chỉ cần vài dòng Stream là xong.

### Ví dụ cơ bản:

\`\`\`java
List<String> names = List.of("Clau", "Sơn", "Thanh");
names.stream()
     .filter(n -> n.startsWith("T"))
     .map(String::toUpperCase)
     .forEach(System.out::println);
\`\`\`

### Các phương thức phổ biến:

\`\`\`java
// Filter - lọc
List<Integer> evens = nums.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// Map - chuyển đổi
List<String> upper = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());

// Reduce - tổng hợp
int sum = nums.stream()
    .reduce(0, Integer::sum);

// Sorted - sắp xếp
names.stream()
    .sorted()
    .forEach(System.out::println);
\`\`\`

### Parallel Stream:

\`\`\`java
// Chạy song song trên nhiều CPU
long count = bigList.parallelStream()
    .filter(condition)
    .count();
\`\`\`

### Ưu điểm:

💬 **Ưu điểm:** ngắn gọn, dễ đọc, và có thể chạy song song (parallel).
Java 8 khiến ta cảm giác như đang code JavaScript vậy 😄.
      `
    },
    {
      id: 9,
      title: 'Maven vs Gradle – Trận chiến của hai "ông vua build"',
      category: 'Java',
      date: '6 Oct 2025',
      readTime: '6 phút',
      excerpt: 'Nếu Java là vương quốc, thì Maven và Gradle là hai vị vua tranh ngôi.',
      content: `
Nếu Java là vương quốc, thì Maven và Gradle là hai vị vua tranh ngôi.

### Maven - Ông vua truyền thống:

\`\`\`xml
<!-- pom.xml -->
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>3.0.0</version>
    </dependency>
</dependencies>
\`\`\`

**Ưu điểm:**
- Chuẩn mực, ổn định
- Cộng đồng lớn
- Convention over configuration

**Nhược điểm:**
- XML dài dòng
- Build chậm hơn Gradle

### Gradle - Vua mới hiện đại:

\`\`\`groovy
// build.gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web:3.0.0'
}
\`\`\`

**Ưu điểm:**
- Cú pháp ngắn gọn (Groovy/Kotlin DSL)
- Build nhanh hơn (incremental build)
- Linh hoạt, dễ tùy chỉnh

**Nhược điểm:**
- Học curve cao hơn
- Config phức tạp hơn

### So sánh nhanh:

| Tiêu chí | Maven | Gradle |
|----------|-------|--------|
| Tốc độ build | Chậm | Nhanh |
| Cú pháp | XML | Groovy/Kotlin |
| Độ phổ biến | Cao | Đang tăng |
| Android | ❌ | ✅ |

### Kết luận:

💡 Dự án nhỏ? Maven là bạn.
Cần tối ưu tốc độ? Hãy chọn Gradle.
Còn nếu bạn thích drama – thử chuyển giữa hai cái đi, bạn sẽ hiểu cảm giác "refactor cả linh hồn" là thế nào 😅.
      `
    },
    {
      id: 10,
      title: 'Multithreading – Khi Java biết "đa nhiệm như siêu nhân"',
      category: 'Java',
      date: '4 Oct 2025',
      readTime: '11 phút',
      excerpt: 'Bạn có 8 nhân CPU mà chỉ dùng 1 à? Phí lắm! Java hỗ trợ Thread để chạy nhiều việc cùng lúc.',
      content: `
Bạn có 8 nhân CPU mà chỉ dùng 1 à? Phí lắm!
Java hỗ trợ **Thread** để chạy nhiều việc cùng lúc.

### Cách tạo Thread:

\`\`\`java
// Cách 1: Extends Thread
class MyThread extends Thread {
  public void run() {
    System.out.println("Đang chạy song song...");
  }
}
new MyThread().start();

// Cách 2: Implements Runnable
class MyTask implements Runnable {
  public void run() {
    System.out.println("Task đang chạy...");
  }
}
new Thread(new MyTask()).start();

// Cách 3: Lambda (Java 8+)
new Thread(() -> System.out.println("Lambda thread")).start();
\`\`\`

### Thread Pool - Quản lý thông minh:

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(4);

for (int i = 0; i < 10; i++) {
    executor.submit(() -> {
        System.out.println(Thread.currentThread().getName());
    });
}

executor.shutdown();
\`\`\`

### Đồng bộ hóa (Synchronization):

\`\`\`java
class Counter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}
\`\`\`

### Deadlock - Cẩn thận!

\`\`\`java
// ĐỪNG làm thế này!
synchronized(lock1) {
    synchronized(lock2) {
        // Có thể gây deadlock
    }
}
\`\`\`

### Best Practices:

- Dùng **ExecutorService** thay vì tạo Thread thủ công
- Tránh **shared mutable state**
- Sử dụng **concurrent collections** (ConcurrentHashMap, CopyOnWriteArrayList)

Nhiều thread giúp app phản hồi nhanh, xử lý tác vụ nặng mượt mà.
Nhưng quản lý thread không dễ — tránh deadlock, đồng bộ tài nguyên, và… đừng quên ngủ nhé (\`Thread.sleep()\`) 💤
      `
    },
    {
      id: 11,
      title: 'Lambda Expressions – Khi Java học tư duy "Functional"',
      category: 'Java',
      date: '2 Oct 2025',
      readTime: '8 phút',
      excerpt: 'Java từng nổi tiếng "rườm rà", cho đến khi Lambda ra đời. Giờ ta có thể viết code "ngắn như JS, mạnh như Java".',
      content: `
Java từng nổi tiếng "rườm rà", cho đến khi **Lambda** ra đời.
Giờ ta có thể viết code "ngắn như JS, mạnh như Java".

### Trước và sau Lambda:

\`\`\`java
// Trước Java 8
List<Integer> nums = Arrays.asList(1, 2, 3);
for (Integer n : nums) {
    System.out.println(n * 2);
}

// Sau Java 8 với Lambda
nums.forEach(n -> System.out.println(n * 2));
\`\`\`

### Cú pháp Lambda:

\`\`\`java
// Không tham số
() -> System.out.println("Hello")

// Một tham số
x -> x * 2

// Nhiều tham số
(a, b) -> a + b

// Có return
(a, b) -> {
    int sum = a + b;
    return sum;
}
\`\`\`

### Functional Interface:

\`\`\`java
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;

System.out.println(add.calculate(5, 3)); // 8
System.out.println(multiply.calculate(5, 3)); // 15
\`\`\`

### Built-in Functional Interfaces:

\`\`\`java
// Predicate<T> - test điều kiện
Predicate<Integer> isEven = n -> n % 2 == 0;

// Function<T, R> - chuyển đổi
Function<String, Integer> strLength = s -> s.length();

// Consumer<T> - xử lý không trả về
Consumer<String> print = s -> System.out.println(s);

// Supplier<T> - cung cấp giá trị
Supplier<Double> random = () -> Math.random();
\`\`\`

### Kết hợp với Stream:

\`\`\`java
List<String> names = List.of("An", "Bình", "Chi");

names.stream()
     .filter(n -> n.length() > 2)
     .map(String::toUpperCase)
     .forEach(System.out::println);
\`\`\`

Lambda biến các biểu thức thành "hàm mini", giúp Stream API hoạt động thần kỳ.

💬 **Kinh nghiệm dev:** Học Lambda sớm, bạn sẽ bớt ghét Java 😆.
      `
    },
    {
      id: 12,
      title: 'Generics – Viết code thông minh và an toàn hơn',
      category: 'Java',
      date: '1 Oct 2025',
      readTime: '10 phút',
      excerpt: 'Generics giúp Java "đọc vị" kiểu dữ liệu, ngăn bug kiểu sai type. Không còn cảnh ép kiểu Object nữa!',
      content: `
Generics giúp Java "đọc vị" kiểu dữ liệu, ngăn bug kiểu sai type.
Không còn cảnh ép kiểu \`Object\` nữa!

### Vấn đề trước Generics:

\`\`\`java
// Trước Java 5
List list = new ArrayList();
list.add("Hello");
list.add(123); // OK nhưng nguy hiểm!

String s = (String) list.get(1); // ClassCastException 💥
\`\`\`

### Giải pháp với Generics:

\`\`\`java
List<String> list = new ArrayList<>();
list.add("Hello");
// list.add(123); ❌ lỗi compile - an toàn!

String s = list.get(0); // Không cần cast
\`\`\`

### Generic Class:

\`\`\`java
class Box<T> {
    private T value;
    
    public void set(T value) {
        this.value = value;
    }
    
    public T get() {
        return value;
    }
}

Box<Integer> intBox = new Box<>();
intBox.set(123);
int num = intBox.get(); // Không cần cast

Box<String> strBox = new Box<>();
strBox.set("Hello");
String text = strBox.get();
\`\`\`

### Generic Method:

\`\`\`java
public class Utils {
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.println(element);
        }
    }
}

Integer[] nums = {1, 2, 3};
String[] words = {"A", "B", "C"};

Utils.printArray(nums);
Utils.printArray(words);
\`\`\`

### Bounded Type Parameters:

\`\`\`java
// Chỉ chấp nhận Number và các subclass
class NumberBox<T extends Number> {
    private T value;
    
    public double getDouble() {
        return value.doubleValue();
    }
}

NumberBox<Integer> intBox = new NumberBox<>(); // OK
NumberBox<Double> doubleBox = new NumberBox<>(); // OK
// NumberBox<String> strBox = new NumberBox<>(); ❌ Error
\`\`\`

### Wildcards:

\`\`\`java
// ? extends T - upper bound (read-only)
public void processNumbers(List<? extends Number> list) {
    for (Number n : list) {
        System.out.println(n.doubleValue());
    }
}

// ? super T - lower bound (write-only)
public void addIntegers(List<? super Integer> list) {
    list.add(1);
    list.add(2);
}
\`\`\`

### Generic trong Collections:

\`\`\`java
// Map với generics
Map<String, Integer> scores = new HashMap<>();
scores.put("An", 95);
scores.put("Bình", 87);

// Set với generics
Set<String> names = new HashSet<>();
names.add("Clau");
\`\`\`

### Lợi ích:

💡 **Generics = Type Safety + Tái sử dụng + Hiệu suất.**

Khi bạn viết \`List<T>\` hay \`Map<K, V>\`, bạn đang dùng phép màu của Generics.

Dev giỏi không chỉ viết code chạy được, mà còn biết đảm bảo code không "nổ" về sau 🔥.
      `
    }
  ];

  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost);
    return (
      <div style={{minHeight: '100vh', backgroundColor: '#f8fafc'}}>
        <section style={{padding: '80px 0', backgroundColor: 'white'}}>
          <div style={{maxWidth: '900px', margin: '0 auto', padding: '0 24px'}}>
                  <button
              onClick={() => {
                setSelectedPost(null);
                window.history.pushState({}, '', '/my-blogprofile/#/blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
                    style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                      padding: '12px 24px',
                backgroundColor: '#f1f5f9',
                color: '#475569',
                      border: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                      cursor: 'pointer',
                marginBottom: '32px',
                transition: 'all 0.3s ease'
                    }}
                  >
              ← Quay lại
                  </button>

                <div style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: post.category === 'JavaScript' ? '#fef3c7' : '#fee2e2',
              color: post.category === 'JavaScript' ? '#d97706' : '#dc2626',
                          borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              {post.category}
                        </div>

            <h1 style={{
              fontSize: '42px',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '16px',
              lineHeight: '1.2'
            }}>
              {post.title}
            </h1>

                        <div style={{
                          display: 'flex',
              gap: '16px',
              fontSize: '14px',
              color: '#64748b',
              marginBottom: '32px'
            }}>
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime} đọc</span>
                        </div>

                    <div style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#334155'
            }}>
              {renderContent(post.content)}
                        </div>

                <div style={{
              marginTop: '64px',
                  padding: '32px',
              backgroundColor: '#f8fafc',
              borderRadius: '16px',
              borderLeft: '4px solid #6366f1'
            }}>
              <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '16px'}}>
                💬 Tổng kết
              </h3>
              <p style={{fontSize: '16px', color: '#475569', lineHeight: '1.7'}}>
                Nếu <strong>Java</strong> là kỹ sư trưởng nghiêm túc luôn lo về độ ổn định ☕<br/>
                Thì <strong>JavaScript</strong> là nghệ sĩ tự do, thích phá luật và tạo trend 🎨<br/><br/>
                Học cả hai, bạn vừa hiểu logic máy tính, vừa hiểu tâm lý người dùng — và đó chính là sức mạnh của một developer toàn diện 💪.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div style={{
              marginTop: '48px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              paddingTop: '32px',
              borderTop: '2px solid #e2e8f0'
            }}>
              {/* Previous Post */}
              {post.id > 1 ? (
                <button
                  onClick={() => setSelectedPost(post.id - 1)}
                              style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 24px',
                    backgroundColor: 'white',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    color: '#475569',
                    fontWeight: '600',
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.borderColor = '#6366f1';
                    e.currentTarget.style.color = '#6366f1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.color = '#475569';
                  }}
                >
                  ← Bài trước
                </button>
              ) : (
                <div></div>
              )}

              {/* Back to List */}
              <button
                onClick={() => {
                  setSelectedPost(null);
                  window.history.pushState({}, '', '/my-blogprofile/#/blog');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  backgroundColor: '#6366f1',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4f46e5';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(99, 102, 241, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#6366f1';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
                }}
              >
                📚 Trở về danh sách
              </button>

              {/* Next Post */}
              {post.id < blogPosts.length ? (
                <button
                  onClick={() => setSelectedPost(post.id + 1)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 24px',
                  backgroundColor: 'white',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    color: '#475569',
                    fontWeight: '600',
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.borderColor = '#6366f1';
                    e.currentTarget.style.color = '#6366f1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.color = '#475569';
                  }}
                >
                  Bài tiếp theo →
                </button>
              ) : (
                <div></div>
              )}
            </div>

            {/* Related Posts */}
                <div style={{
              marginTop: '64px',
              padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '24px'}}>
                📖 Bài viết cùng chủ đề
              </h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                {blogPosts
                  .filter(p => p.category === post.category && p.id !== post.id)
                  .slice(0, 3)
                  .map(relatedPost => (
                    <div
                      key={relatedPost.id}
                      onClick={() => setSelectedPost(relatedPost.id)}
                      style={{
                        padding: '16px',
                        backgroundColor: '#f8fafc',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        border: '1px solid #e2e8f0'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f1f5f9';
                        e.currentTarget.style.transform = 'translateX(8px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8fafc';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                          <div style={{
                        display: 'inline-block',
                        padding: '4px 10px',
                        backgroundColor: relatedPost.category === 'JavaScript' ? '#fef3c7' : '#fee2e2',
                        color: relatedPost.category === 'JavaScript' ? '#d97706' : '#dc2626',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: '600',
                        marginBottom: '8px'
                      }}>
                        {relatedPost.category}
                        </div>
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '8px'
                      }}>
                        {relatedPost.title}
                      </h4>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '13px',
                        color: '#64748b'
                      }}>
                        <span>{relatedPost.date}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime} đọc</span>
                        <span style={{marginLeft: 'auto', color: '#6366f1', fontWeight: '600'}}>
                          Đọc ngay →
                        </span>
                          </div>
                          </div>
                  ))}
                          </div>
                          </div>
                        </div>
        </section>
                      </div>
    );
  }

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#f8fafc'}}>
      {/* Hero Section */}
      <section style={{padding: '80px 0 64px', backgroundColor: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{textAlign: 'center'}}>
            <h1 style={{fontSize: '48px', fontWeight: 'bold', color: '#1e293b', marginBottom: '16px'}}>
              📚 Blog - Chia sẻ kiến thức
            </h1>
            <p style={{fontSize: '18px', color: '#64748b', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
              12 bài viết chuyên sâu về Java và JavaScript - Phong cách dev nói chuyện với dev, vừa học vừa vui! 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{padding: '64px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {blogPosts.map(post => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post.id)}
            style={{
              backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = post.category === 'JavaScript' 
                    ? '0 20px 40px rgba(99, 102, 241, 0.2)'
                    : '0 20px 40px rgba(239, 68, 68, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  backgroundColor: post.category === 'JavaScript' ? '#fef3c7' : '#fee2e2',
                  color: post.category === 'JavaScript' ? '#d97706' : '#dc2626',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '16px'
                }}>
                  {post.category}
                </div>
                <h3 style={{
                  color: '#1e293b',
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '12px',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  fontSize: '15px',
                  lineHeight: '1.7',
                  marginBottom: '16px'
                }}>
                  {post.excerpt}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid #f1f5f9'
                }}>
                  <span style={{fontSize: '13px', color: '#94a3b8'}}>
                    {post.date} · {post.readTime} đọc
                  </span>
                  <span style={{color: '#6366f1', fontWeight: '600', fontSize: '14px'}}>
                    Đọc tiếp →
                  </span>
                </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
