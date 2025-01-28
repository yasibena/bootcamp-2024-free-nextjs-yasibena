import { Suspense } from "react";

import { books } from "@/mock/books";
import { notFound } from "next/navigation";
import Image from "next/image";

import styles from "./page.module.css";
import MingcuteComments from "@/icons/MingcuteComments";
import MingcuteUser from "@/icons/MingcuteUser";
import MingcuteStarFill from "@/icons/MingcuteStarFill";
import { BookModel } from "@/types/models/book.models";
import BrifeComponent from "./brife.component";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const book = await getBook(params?.id);

  if (!book) {
    return notFound();
  }

  const renderStars = (stars: number) => {
    return Array.from({ length: stars }, (_, index) => (
      <MingcuteStarFill key={index} />
    ));
  };

  const FormattedDate = (date: string | Date | undefined): string => {
    if (!date) return "";

    const dateObj = typeof date === "string" ? new Date(date) : date;

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(dateObj);
  };

  return (
    <div className={styles["each-book-container"]}>
      <div className={styles["top-section"]}>
        <div className={styles["each-image"]}>
          <Image src={book?.image} alt={book?.name} width={400} height={400} />
        </div>

        <div className={styles["each-description-container"]}>
          <div className={styles["in-stock-label"]}>
            {book?.inStock == true ? <span>موجود</span> : <span>ناموجود</span>}
          </div>
          <h1>{book?.name}</h1>
          <div className={styles.author}>
            <div>
              <span className={styles.bold}>نویسنده: </span>
              <span> {book?.author}</span>
            </div>
            <div>
              <span className={styles.bold}>امتیاز: </span>
              <span>{book?.rating}</span>
            </div>
          </div>
          <div className={styles["each-price"]}>{book?.price} تومان</div>
          <div className={styles.description}>
            <Suspense fallback="...">
              <BrifeComponent content={book?.brief} />
            </Suspense>
          </div>
          <div className={styles.button}>
            <button>اضافه کردن به سبد</button>
          </div>
          <div>
            <span>دسته بندی :</span>
            {book?.category?.map((each, index) => (
              <span className={styles["category-label"]} key={index}>
                {each}
              </span>
            ))}
          </div>

          <div className={styles.line}></div>

          <div className={styles.comments}>
            <div className={styles["comment-title"]}>
              <MingcuteComments />
              <h3>نظرات</h3>
            </div>
            {book?.comments?.map((comment, index) => (
              <div key={index} className={styles["each-comment"]}>
                <div className={styles.right}>
                  <div className={styles.user}>
                    <MingcuteUser />
                  </div>
                  <div>
                    <div>{renderStars(comment?.stars)}</div>
                    <div>{comment.name}</div>
                    <div>{FormattedDate(comment.date)}</div>
                  </div>
                </div>

                <div className={styles.left}>{comment.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

async function getBook(id: string): Promise<BookModel | undefined> {
  return new Promise((resolve): void => {
    setTimeout((): void => {
      const result = books.find((x): boolean => x.id == id);
      resolve(result);
    }, 1000);
  });
}
