FROM mycrawl
RUN rm -rf /root/crawl/
COPY ./ /root/crawl
RUN systemctl enable crond.service
CMD ["/usr/sbin/init"]