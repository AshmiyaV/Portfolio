import styles from './Logo.module.scss';
import Link from 'next/link';
import commonConfig from '@/database/config/metadata.json';

export default function Logo({classVariable}) {
    return (
        <Link href="/" className={classVariable} aria-label={commonConfig.metadata.title}>
             <svg className={styles.logo} width="150" height="150" viewBox="0 0 316 316" fill="none" xmlns="http://www.w3.org/2000/svg">
             <g className={styles.outer}>
                    <g className={styles.spin}>
<path d="M166 56C166 59.866 162.866 63 159 63C155.134 63 152 59.866 152 56C152 52.134 155.134 49 159 49C162.866 49 166 52.134 166 56Z" fill="black"/>
<circle cx="159" cy="262" r="7" fill="black"/>
<path d="M129.18 245.582L131.748 246.62L116.145 263.846L113.616 262.824L114.364 239.594L116.933 240.632L116.095 260.103L116.253 260.167L129.18 245.582ZM125.038 253.101L114.687 248.917L115.565 246.744L125.917 250.928L125.038 253.101Z" fill="black"/>
<path d="M78.4648 231.769C77.7992 232.629 77.5815 233.59 77.8116 234.653C78.0417 235.716 78.6278 236.71 79.5699 237.636C80.2588 238.313 80.971 238.794 81.7067 239.079C82.4374 239.359 83.1387 239.446 83.8108 239.34C84.4778 239.229 85.0553 238.925 85.5432 238.428C85.9514 238.013 86.2037 237.559 86.2999 237.066C86.386 236.573 86.3692 236.073 86.2493 235.567C86.1245 235.066 85.9521 234.583 85.7321 234.118C85.5072 233.658 85.2877 233.248 85.0737 232.888L83.9116 230.909C83.611 230.404 83.3046 229.814 82.9924 229.139C82.6752 228.459 82.4479 227.732 82.3107 226.96C82.1635 226.188 82.1869 225.404 82.3809 224.609C82.575 223.814 83.0305 223.052 83.7474 222.322C84.5739 221.482 85.541 220.938 86.6488 220.693C87.7516 220.442 88.92 220.53 90.1541 220.956C91.3832 221.378 92.5954 222.176 93.7907 223.351C94.905 224.446 95.6932 225.575 96.1551 226.736C96.6121 227.892 96.7574 229.021 96.5911 230.122C96.4197 231.218 95.9462 232.222 95.1705 233.133L93.2255 231.221C93.7524 230.583 94.0328 229.903 94.0668 229.179C94.0907 228.456 93.9289 227.739 93.5813 227.029C93.2236 226.319 92.7358 225.66 92.1179 225.053C91.3986 224.346 90.6383 223.828 89.837 223.498C89.0306 223.173 88.2537 223.057 87.5061 223.149C86.7536 223.246 86.0986 223.578 85.541 224.145C85.0331 224.662 84.7642 225.224 84.7343 225.832C84.7044 226.44 84.8254 227.077 85.0973 227.742C85.3692 228.408 85.7039 229.086 86.1016 229.775L87.4785 232.204C88.3506 233.749 88.8225 235.193 88.8944 236.539C88.9662 237.884 88.4868 239.081 87.4562 240.13C86.5999 241.001 85.6175 241.529 84.5092 241.714C83.3908 241.9 82.2548 241.779 81.101 241.352C79.9372 240.925 78.8589 240.223 77.8662 239.248C76.8633 238.262 76.1486 237.206 75.7221 236.079C75.2906 234.958 75.1506 233.865 75.3021 232.799C75.4486 231.728 75.895 230.787 76.6414 229.977L78.4648 231.769Z" fill="black"/>
<path d="M76.4186 201.265L56.3337 209.787L55.3017 207.355L64.2458 203.56L59.7016 192.851L50.7576 196.646L49.7256 194.214L69.8104 185.691L70.8424 188.124L61.8592 191.935L66.4033 202.645L75.3866 198.833L76.4186 201.265Z" fill="black"/>
<path d="M44.2737 169.18L44.2466 166.027L62.293 158.457L62.2908 158.201L44.117 150.942L44.0899 147.789L65.9072 147.602L65.9285 150.073L49.3524 150.216L49.3542 150.429L65.9889 157.104L66.0094 159.49L49.4919 166.451L49.4937 166.664L66.0698 166.521L66.0911 168.993L44.2737 169.18Z" fill="black"/>
<path d="M52.9678 114.13L73.1962 122.306L72.2061 124.756L51.9778 116.58L52.9678 114.13Z" fill="black"/>
<path d="M70.3745 84.7801L72.4954 82.6224L84.0006 85.4465L84.1798 85.2641L81.1584 73.8092L83.2794 71.6515L86.9004 86.2653L93.3128 92.5684L91.4607 94.4525L85.0484 88.1495L70.3745 84.7801Z" fill="black"/>
<path d="M116.449 75.6914L113.899 76.7733L112.751 53.5592L115.262 52.4939L131.159 69.4494L128.61 70.5314L115.434 56.1707L115.277 56.2373L116.449 75.6914ZM114.061 67.4463L124.339 63.0852L125.255 65.2428L114.977 69.6038L114.061 67.4463Z" fill="black"/>
<path d="M186.82 70.4179L184.252 69.3799L199.855 52.1536L202.384 53.1756L201.636 76.4061L199.067 75.3682L199.905 55.8968L199.747 55.8329L186.82 70.4179ZM190.962 62.8994L201.313 67.0832L200.435 69.2562L190.083 65.0724L190.962 62.8994Z" fill="black"/>
<path d="M237.535 84.2306C238.201 83.3711 238.419 82.41 238.188 81.3473C237.958 80.2845 237.372 79.2901 236.43 78.3641C235.741 77.687 235.029 77.2059 234.293 76.921C233.563 76.641 232.861 76.5541 232.189 76.6603C231.522 76.7715 230.945 77.0753 230.457 77.5717C230.049 77.987 229.796 78.4412 229.7 78.9342C229.614 79.4271 229.631 79.9267 229.751 80.4329C229.876 80.9341 230.048 81.4172 230.268 81.8824C230.493 82.3425 230.712 82.7525 230.926 83.1122L232.088 85.091C232.389 85.5957 232.695 86.1857 233.008 86.861C233.325 87.5413 233.552 88.2676 233.689 89.0398C233.837 89.812 233.813 90.5957 233.619 91.3909C233.425 92.186 232.97 92.9483 232.253 93.6777C231.426 94.5185 230.459 95.0617 229.351 95.3072C228.248 95.5578 227.08 95.4699 225.846 95.0435C224.617 94.6222 223.405 93.824 222.209 92.649C221.095 91.5537 220.307 90.4255 219.845 89.2643C219.388 88.1081 219.243 86.9793 219.409 85.878C219.58 84.7817 220.054 83.7782 220.829 82.8675L222.774 84.7793C222.248 85.4167 221.967 86.0971 221.933 86.8206C221.909 87.544 222.071 88.2608 222.419 88.971C222.776 89.681 223.264 90.3398 223.882 90.9472C224.601 91.6542 225.362 92.1725 226.163 92.5021C226.969 92.8266 227.746 92.943 228.494 92.8512C229.246 92.7543 229.901 92.4222 230.459 91.8549C230.967 91.3383 231.236 90.776 231.266 90.1681C231.296 89.5601 231.175 88.9233 230.903 88.2577C230.631 87.5921 230.296 86.9145 229.898 86.2248L228.522 83.7958C227.649 82.2514 227.177 80.8066 227.106 79.4612C227.034 78.1159 227.513 76.919 228.544 75.8705C229.4 74.9993 230.382 74.4711 231.491 74.2858C232.609 74.1004 233.745 74.2212 234.899 74.6482C236.063 75.0752 237.141 75.7765 238.134 76.7524C239.137 77.7382 239.851 78.7942 240.278 79.9206C240.709 81.0418 240.849 82.1355 240.698 83.2015C240.551 84.2725 240.105 85.213 239.359 86.023L237.535 84.2306Z" fill="black"/>
<path d="M239.581 114.735L259.666 106.213L260.698 108.645L251.754 112.44L256.298 123.149L265.242 119.354L266.274 121.786L246.19 130.309L245.158 127.876L254.141 124.065L249.597 113.355L240.613 117.167L239.581 114.735Z" fill="black"/>
<path d="M271.726 146.82L271.753 149.973L253.707 157.543L253.709 157.799L271.883 165.058L271.91 168.211L250.093 168.398L250.072 165.927L266.648 165.784L266.646 165.571L250.011 158.896L249.991 156.51L266.508 149.549L266.506 149.336L249.93 149.479L249.909 147.007L271.726 146.82Z" fill="black"/>
<path d="M263.032 201.87L242.804 193.694L243.794 191.244L264.022 199.42L263.032 201.87Z" fill="black"/>
<path d="M245.626 231.22L243.505 233.378L231.999 230.554L231.82 230.736L234.842 242.191L232.721 244.348L229.1 229.735L222.687 223.432L224.539 221.547L230.952 227.851L245.626 231.22Z" fill="black"/>
<path d="M199.551 240.309L202.101 239.227L203.249 262.441L200.738 263.506L184.841 246.551L187.39 245.469L200.566 259.829L200.723 259.763L199.551 240.309ZM201.939 248.554L191.661 252.915L190.745 250.757L201.023 246.396L201.939 248.554Z" fill="black"/>
   </g>
</g>
<g className={styles.inner}>
<circle cx="159" cy="158" r="34.5" fill="black" stroke="black"/>
<path d="M140.823 159.864V158.5L151.8 152.909V155.091L143.38 159.148L143.448 159.011V159.352L143.38 159.216L151.8 163.273V165.455L140.823 159.864ZM162.234 147.727L156.609 168.625H154.768L160.393 147.727H162.234ZM176.175 159.864L165.198 165.455V163.273L173.618 159.216L173.55 159.352V159.011L173.618 159.148L165.198 155.091V152.909L176.175 158.5V159.864Z" fill="white"/>
</g>
</svg>
        </Link>
    )
}